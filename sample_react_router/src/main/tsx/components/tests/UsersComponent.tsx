import * as React from "react";
import {Link} from "react-router";

interface States{
    users:any;
}

export class UsersComponent extends React.Component<{}, States> {
    componentWillMount() {
        this.setState({
            users: [{id:1,name:"name1"},{id:2,name:"name2"}]
        })
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <div className="master">
                    <ul>
                        {/* use Link to route around the app */}
                        {this.state.users.map(user => (
                            <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="detail">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
