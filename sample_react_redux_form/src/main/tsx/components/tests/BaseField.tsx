import * as React from "react";
import {connect} from "react-redux";
import {Field, reduxForm, FormProps} from "redux-form";

interface Props extends FormProps<any, any, any> {
    input:any;
    className:any;
    meta:any;
}

export class SelectMessageComponent extends React.Component<Props, {}> {
    render() {
        return (
            <div>
                <select {...this.props.input} type="select" className={this.props.className}>
                    {this.props.children}
                </select>
                {this.props.meta.touched && ((this.props.meta.error && <span>{this.props.meta.error}</span>) || (this.props.meta.warning && <span>{this.props.meta.warning}</span>))}
            </div>
        )
    }
}

export const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
