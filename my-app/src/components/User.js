import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);

    return (
    <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>name: {name}</h2>
        <h2>location : Dumka</h2>
        <h2>contact: Abhikr71</h2>
    </div>
    )
}
export default User;