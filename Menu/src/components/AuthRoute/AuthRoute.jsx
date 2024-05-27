import { Navigate } from "react-router-dom"



function AuthRoute({ user, foods}) {
    if (!user)
        return <Navigate to="/login" />

    if (user)
        return foods
}

export default AuthRoute