import { Navigate } from "react-router-dom";
import { service } from "../services/service";

const AuthGuard = ({children}) => {

    if (!service.isLogged()) {
        return <Navigate to={`/auth`} />
    }

    return children;
}

export default AuthGuard;
