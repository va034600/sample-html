import * as React from "react";
import {connect} from "react-redux";
import {TestGlobalState} from "../../states/tests/TestGlobalState";
import {mainFormComponentConnect} from "./TestMainFormComponent";

interface Props {
    value: TestGlobalState;
    // dispatch: Redux.Dispatch<any>;
};

class TestComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        const MainFormComponentConnect = mainFormComponentConnect();

        return (
            <div>
                <div>re</div>
                <MainFormComponentConnect />
            </div>
        );
    }
}

function mapStateToProps2(state) {
    return {
        value: state.testReducer
    };
}

export function test6(){
    return connect(
        mapStateToProps2
    )(TestComponent);
}