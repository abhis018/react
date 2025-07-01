import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
    }


    render(){
        const {name} = this.props;
        const {count} = this.state;

        return(
        <div className="user-card">
            <h1>count : {count}</h1>
            <button onClick={() => {
                this.state({
                    count: this.state.count + 1;
                })
            }}>
                Update Count
            </button>
            <h2>name: {name}</h2>
            <h2>location : Dumka</h2>
            <h2>contact: Abhikr71</h2>
        </div>
        )
    }
}

export default UserClass;