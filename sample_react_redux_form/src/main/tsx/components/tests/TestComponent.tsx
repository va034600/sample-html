import * as React from "react";
import {connect} from "react-redux";
import {Field, reduxForm , reducer as formReducer, FormProps} from 'redux-form'

import {TestGlobalState} from "../../states/tests/TestGlobalState";
import {fetchTest} from "../../actions/tests/TestActions";

interface Props{
    value: TestGlobalState;
    dispatch: Redux.Dispatch<any>;
}

class TargetComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const MainFormComponentConnect = connect(
            mapStateToProps
        )(MainFormComponent);

        const MainFormComponentRedux = reduxForm({
            form: 'mainForm' // a unique name for this form
        })(MainFormComponentConnect);
        return (
            <div>
                <div>re</div>
                <MainFormComponentRedux />
            </div>
        );
    }

    // handleSubmit(values) {
    //     // Do something with the form values
    //     console.log(values);
    // }

    // handleSubmit = (values) => {
    //     // Do something with the form values
    //     console.log(values);
    // }
}

interface MainFormData extends FormData{
    firstName?:string;
    lastName?:string;
    favoriteColor?:string;
    // email?:string;
}

interface Props2 extends FormProps<MainFormData, any, any>{
    value: TestGlobalState;
    dispatch: Redux.Dispatch<any>;
};

function submit(values) {
console.log(values);
}

class MainFormComponent extends React.Component<Props2, {}> {
    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        const required = value => value ? undefined : 'Required'
        const maxLength = max => value =>
            value && value.length > max ? `Must be ${max} characters or less` : undefined
        const maxLength15 = maxLength(15)
        const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

        const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type}/>
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        )

        return (
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component={renderField} type="text" validate={[ required, maxLength15 ]}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email"/>
                </div>
                <div>
                    <label>Sex</label>
                    <div>
                        <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
                        <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
                    </div>
                </div>
                <div>
                    <label>Favorite Color</label>
                    <div>
                        <Field name="favoriteColor" component="select">
                            <option></option>
                            <option value="ff0000">Red</option>
                            <option value="00ff00">Green</option>
                            <option value="0000ff">Blue</option>
                        </Field>
                    </div>
                </div>
                <div>
                    <label htmlFor="employed">Employed</label>
                    <div>
                        <Field name="employed" id="employed" component="input" type="checkbox"/>
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea"/>
                    </div>
                </div>
                <button type="submit" disabled={submitting}>Log In</button>

                <button onClick={this.aaa.bind(this)}></button>
            </form>
        );
    }

    aaa(){
        this.props.dispatch(fetchTest());
    }
}

function mapStateToProps(state) {
    return {
        value: state.test6Reducer
    };
}

export function test6(){
    return connect(
        mapStateToProps
    )(TargetComponent);
}