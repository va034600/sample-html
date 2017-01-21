import * as React from "react";
import {TestGlobalState, SampleRecord} from "../../states/tests/TestGlobalState";
import {connect} from "react-redux";
import {fetchList} from "../../actions/tests/TestActions";

interface Props {
    value: TestGlobalState;
    dispatch: Redux.Dispatch<any>;
}

class TargetComponent extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(fetchList(3));
    }

    render() {
        var status = this.props.value.isFetching ? 'fetching' : 'finished';

        return (
            <div>
                <div>{status}</div>
                <ul>
                    {this.props.value.sampleRecordList.map((row) =>
                        <SearchResult data={row} key={row.id} />
                    )}
                </ul>
            </div>
        );
    }
}

interface Props2 {
    data:SampleRecord
};

class SearchResult extends React.Component<Props2, {}> {
    render() {
        return (
            <li>
                <p>{this.props.data.name}</p>
            </li>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.testReducer
    };
}

export function testComponent(){
    return connect(
        mapStateToProps
    )(TargetComponent);
}