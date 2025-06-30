import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is nameste react web series</h2>
            <User name={"Abhishek kumar (funtion)"}/>
            <UserClass name={"Abhishek kumar (class)"}/>
        </div>
    )
}
export default About;