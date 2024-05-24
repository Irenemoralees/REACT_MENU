import { Navigate } from "react-router-dom"


function AuthRoute({ user, component }) {
    if (!user)
        return <Navigate to="/login" />

    if (user)
        return component
}

export default AuthRoute