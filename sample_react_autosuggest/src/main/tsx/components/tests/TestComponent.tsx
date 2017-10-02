import * as React from "react";
import {connect} from "react-redux";
// import {Autosuggest, AutosuggestProps, InputProps} from 'react-autosuggest';

import {AutosuggestProps, InputProps} from 'react-autosuggest'
const Autosuggest = require('react-autosuggest') as
    new() => React.Component<AutosuggestProps, any>

const languages = [
    {
        name: 'C',
        year: 1972
    },
    {
        name: 'C#',
        year: 2000
    },
    {
        name: 'C++',
        year: 1983
    },
    {
        name: 'Clojure',
        year: 2007
    },
    {
        name: 'Elm',
        year: 2012
    },
    {
        name: 'Go',
        year: 2009
    },
    {
        name: 'Haskell',
        year: 1990
    },
    {
        name: 'Java',
        year: 1995
    },
    {
        name: 'Javascript',
        year: 1995
    },
    {
        name: 'Perl',
        year: 1987
    },
    {
        name: 'PHP',
        year: 1995
    },
    {
        name: 'Python',
        year: 1991
    },
    {
        name: 'Ruby',
        year: 1995
    },
    {
        name: 'Scala',
        year: 2003
    }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
// const getSuggestions = value => {
//     const inputValue = value.trim().toLowerCase();
//     const inputLength = inputValue.length;
//
//     return inputLength === 0 ? [] : languages.filter(lang =>{
//             // console.log("value:" + value + " inputValue:" + inputValue + " flag:" + (lang.name.toLowerCase().slice(0, inputLength) === inputValue))
//             return lang.name.toLowerCase().slice(0, inputLength) === inputValue
//         }
//     );
// };


function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return languages.filter(language => regex.test(language.name));
}



// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <div>
        {suggestion.name}
    </div>
);

interface Props extends AutosuggestProps {
    // type: string;
    // value: string;
    // value: TestGlobalState;
    dispatch: Redux.Dispatch<any>;
}

interface State {
    value?: string;
    suggestions?: any[];
}

class TargetComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue }) => {
        console.log("onchange value:" + newValue);
        this.setState({
            value: newValue,
//            suggestions: this.state.suggestions
        });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
        console.log("onSuggestionsFetchRequested value:" + value);
        this.setState({
            //value: value,
            suggestions: getSuggestions(value)
        });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
        console.log("onSuggestionsClearRequested value:" + this.state.value);
        this.setState({
            // value: this.state.value,
            // value: "",
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps:InputProps = {
            placeholder: 'Type a programming language',
            value: value,
            onChange: this.onChange.bind(this)
        };

        // Finally, render it!
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        // value: state.testReducer
    };
}

export function testComponent(){
    return connect(
        mapStateToProps
    )(TargetComponent);
}