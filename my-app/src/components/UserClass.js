import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {name} = this.props;

        return(
        <div className="user-card">
            <h2>name: {name}</h2>
            <h2>location : Dumka</h2>
            <h2>contact: Abhikr71</h2>
        </div>
        )
    }
}

export default UserClass;