import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";
import {connect} from "react-redux";
import {LoginTC} from "../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {RootStateRedux} from "../redux/redux-store";


const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                       name={"login"}
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={required}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={'checkbox'}/>
                remember me
            </div>
            <div>
                <button>
                    Login
                </button>
            </div>
        </form>
    );
};

const ReduxLoginForm = reduxForm({
    form: 'contact'
})(LoginForm)

export const Login = (props: any) => {
    const onSubmit = (formData: any) => {
        debugger
        console.log(formData)
        props.LoginTC(formData.login, formData.password, formData.isAuth)
    }
    if(props.isAuth){
        debugger
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state:any) =>({
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {LoginTC})(Login)
