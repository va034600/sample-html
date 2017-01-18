import * as React from "react";
import {Link} from "react-router";

export class AppComponent extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/users">users</Link></li>
                    <li><Link to="/aaa">aaa</Link></li>
                </ul>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}
