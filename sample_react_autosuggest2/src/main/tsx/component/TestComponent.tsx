import * as React from "react";
import * as Redux from "redux";
import {connect} from "react-redux";
import {TestAction, TestGlobalState} from "../store/TestStore";

// import {Autosuggest, AutosuggestProps, InputProps} from 'react-autosuggest';
import {AutosuggestProps, InputProps} from 'react-autosuggest'
const Autosuggest = require('react-autosuggest') as
    new() => React.Component<AutosuggestProps, any>

interface Props extends AutosuggestProps {
    dispatch: Redux.Dispatch<any>;
    mainState: TestGlobalState;
}

class TargetComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const inputProps:InputProps = {
            placeholder: 'Type a programming language',
            value: this.props.mainState.name,
            onChange: this.onChange.bind(this)
        };

        return (
            <Autosuggest
                suggestions={this.props.mainState.nameList}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }

    onChange = (event, { newValue }) => {
        console.log("onchange value:" + newValue);
        this.props.dispatch(TestAction.setName(newValue));
    };

    onSuggestionsFetchRequested = ({ value }) => {
        console.log("onSuggestionsFetchRequested value:" + value);
        this.props.dispatch(TestAction.fetchList());
    };

    onSuggestionsClearRequested = () => {
        console.log("onSuggestionsClearRequested");
        this.props.dispatch(TestAction.clearList());
    };

    getSuggestionValue(suggestion){
        return suggestion.name;
    }

    renderSuggestion(suggestion){
        return <div>{suggestion.name}</div>;
    }
}

function mapStateToProps(state) {
    return {
        mainState: state.testReducer,
    };
}

export function testComponent(){
    return connect(
        mapStateToProps
    )(TargetComponent as any);
}
