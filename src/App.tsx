import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Redirect, Route, withRouter} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainerAPIClass";
import {LoginContainer} from "./Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedSuccessAppTC} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {RootStateRedux} from "src/redux/redux-store";

type RootAppType = {
    initializedSuccessAppTC: () => void
    initialized: boolean
}

class App extends React.Component<RootAppType> {
    componentDidMount() {
        debugger
        this.props.initializedSuccessAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/'
                           render={() => <Redirect to={'/profile'}/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <LoginContainer/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    debugger
    return {initialized: state.app.initialized}
}
export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializedSuccessAppTC}))(App);

