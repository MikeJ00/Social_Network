import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsControls/FormsControls";
import {required} from "../utils/validators/validators";


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

export const Login = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div>
        <h1>
            Login
        </h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}