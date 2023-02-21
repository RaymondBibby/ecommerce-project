import { useContext } from "react";
import { UserContext } from "../contexts/user";

function Banner () {
    const {user, setUser} = useContext(UserContext);
    return (<h1>Hello World, {user}!</h1>)
}

export default Banner;