import * as React from "react";

interface Props{
    params:any;
}

interface States{
    user:any;
}

export class UserComponent extends React.Component<Props, States> {
    componentWillMount() {
        this.setState({
            user: this.findUserById(this.props.params.userId)
        })
    }

    componentWillReceiveProps(){
        this.setState({
            user: this.findUserById(this.props.params.userId)
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.user.name}</h2>
                {/* etc. */}
            </div>
        )
    }

    findUserById(userId){
        return {
            id:userId,
            name:"name" + userId
        }
    }
}
