// It's a React Hook provided by react-router-dom.
// It gives you access to the dynamic URL parameters in the current route.
import { useParams } from "react-router-dom";

export default function User(){
    const { userId } = useParams();
    return <h1>👤 User Profile for ID: {userId}</h1>;
}