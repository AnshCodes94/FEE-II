import { Navigate , Outlet } from "react-router-dom";

export function ProtectedRoutes() {
    const login = true;
    return login ? <Outlet /> : <Navigate to="/login" />;
}