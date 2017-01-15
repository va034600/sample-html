import * as React from "react";
import {connect} from "react-redux";
import {Field, reduxForm, reducer as formReducer, FormProps, DataShape} from 'redux-form'

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
        const MainFormComponentRedux = reduxForm({
            form: 'mainForm' // a unique name for this form
        })(MainFormComponent);

        const MainFormComponentConnect = connect(
            mapStateToProps
        )(MainFormComponentRedux);

        return (
            <div>
                <div>re</div>
                <MainFormComponentConnect />
            </div>
        );
    }
}

interface MainDataShape{
    // firstName?:string;
    // lastName?:string;
    // email?:string;
//     favoriteColor?:string;
}

interface Props2 extends FormProps<MainDataShape, any, any>{
    value: TestGlobalState;
    dispatch: Redux.Dispatch<any>;
};

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

class MainFormComponent extends React.Component<Props2, {}> {
    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        const required = value => value ? undefined : 'Required'
        const maxLength = max => value =>
            value && value.length > max ? `Must be ${max} characters or less` : undefined
        const maxLength15 = maxLength(15)
        const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

        return (
            <form onSubmit={handleSubmit(this.submitAbc)}>
                <Field name="username" type="text"
                       component={renderField} label="Username"
                       validate={[ required, maxLength15 ]}
                />
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text"/>
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
                <button type="submit" disabled={pristine || submitting}>Log In</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>

                <button type="button" onClick={this.clickByTestButton.bind(this)}>test</button>
            </form>
        );
    }

    clickByTestButton(){
        this.props.dispatch(fetchTest());
    }

    submitAbc(values) {
        console.log(values);
        alert("do submit");
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