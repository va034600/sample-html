import * as React from "react";
import {connect} from "react-redux";
import {Field, reduxForm, FormProps} from "redux-form";
import {fetchTest, loadEvent} from "../../actions/tests/TestActions";
import {renderField, SelectMessageComponent} from "./BaseField";

interface MainDataShape{
    // firstName?:string;
    // lastName?:string;
    // email?:string;
//     favoriteColor?:string;
}

interface Props2 extends FormProps<MainDataShape, any, any>{
    // value: TestGlobalState;
    initialValues: any
    dispatch: Redux.Dispatch<any>;
};

class MainFormComponent extends React.Component<Props2, {}> {
    constructor(props) {
        super(props);

        this.submitByMainForm = this.submitByMainForm.bind(this);
    }

    render() {
        const { error, handleSubmit, pristine, reset, submitting } = this.props;

        const required = value => value ? undefined : 'Required'
        const maxLength = max => value =>
            value && value.length > max ? `Must be ${max} characters or less` : undefined
        const maxLength15 = maxLength(15)
        const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

        return (
            <form onSubmit={handleSubmit(this.submitByMainForm)}>
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
                        <Field name="favoriteColor" component={ SelectMessageComponent } validate={[ required ]}>
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

                <button type="button" onClick={this.clickByLoadButton.bind(this)}>load</button>
            </form>
        );
    }

    clickByLoadButton(){
        this.props.dispatch(loadEvent({
            firstName:"f1"
        }));
    }

    submitByMainForm(values) {
        console.log(values);
        this.props.dispatch(fetchTest());
    }
}

function mapStateToProps(state) {
    return {
        // value: state.testReducer
        initialValues: state.testReducer
    };
}

const MainFormComponentRedux = reduxForm({
    form: 'mainForm' // a unique name for this form
})(MainFormComponent);

export function mainFormComponentConnect(){
    return connect(
        mapStateToProps
    )(MainFormComponentRedux);
}

