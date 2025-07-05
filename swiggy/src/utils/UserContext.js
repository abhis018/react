import {createContext} from 'react'

const UserContext = createContext( {
  loggedInUser: "A",
});

export default UserContext