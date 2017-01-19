import * as React from 'react';
import {takeEvery} from "redux-saga";

interface Props {
    content: string
};

interface State {
    countA:number
};

export default class TestComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            countA : 10
        };
    }

    render() {
        return <div>
            <h1>{this.props.content}</h1>
            <div>countA: {this.state.countA}</div>
            <button onClick={this.clickByTestButton.bind(this)}>click!</button>
        </div>
    }

    clickByTestButton(event) {
        this.setState((prevState) => ({
            countA: prevState.countA + 1
        }));
    }
}

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", null);
}