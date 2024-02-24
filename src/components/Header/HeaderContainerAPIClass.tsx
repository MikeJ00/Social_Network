import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, LogOutTC} from "../../redux/auth-reducer";

type HeaderContainerType = {
    getAuthUserDataTC: () => void
    LogOutTC: () => void
}

class HeaderContainerAPIClass extends React.Component<HeaderContainerType, any> {
    componentDidMount() {
        debugger
        this.props.getAuthUserDataTC()
        // authAPI.authMe().then(res => {
        //     if (res.resultCode === 0) {
        //         let {id, email, Login} = res.data
        //         this.props.setAuthUserDataAC(id, email, Login)
        //     }
        // })
    }

//     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//     withCredentials: true
// })
// .then(res => {
//     debugger
//     console.log(res.data)
//     if (res.data.resultCode === 0) {
//         let {id, email, Login} = res.data.data
//         this.props.setAuthUserDataAC(id, email, Login)
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
export const HeaderContainer = connect(mapStateToProps, {getAuthUserDataTC, LogOutTC})(HeaderContainerAPIClass)
