import * as React from "react";
import {Test6GlobalState, SampleRecord} from "states/tests/Test6GlobalState";
import {connect} from "react-redux";
import {fetchList} from "actions/tests/Test6Actions";

interface Props {
    value: Test6GlobalState;
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
        value: state.test6Reducer
    };
}

export function test6(){
    return connect(
        mapStateToProps
    )(TargetComponent);
}