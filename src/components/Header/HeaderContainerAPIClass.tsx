import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDataAC} from "../../redux/auth-reducer";
import {userAPI} from "../../api/api";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}
type HeaderContainerType = {
    setAuthUserDataAC: (id: string, email: string, login: string) => void
}

class HeaderContainerAPIClass extends React.Component<HeaderContainerType, any> {
    componentDidMount() {
        debugger
        userAPI.authMe().then(res => {
            if (res.resultCode === 0) {
                let {id, email, login} = res.data
                this.props.setAuthUserDataAC(id, email, login)
            }
        })
    }

//     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     withCredentials: true
// })
// .then(res => {
//     debugger
//     console.log(res.data)
//     if (res.data.resultCode === 0) {
//         let {id, email, login} = res.data.data
//         this.props.setAuthUserDataAC(id, email, login)
//     }
// })

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export const HeaderContainer = connect(mapStateToProps, {setAuthUserDataAC})(HeaderContainerAPIClass)
