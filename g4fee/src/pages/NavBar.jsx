import { useAuthStore } from "../stores/useAuthStore.jsx";
import { Nav1 } from "./Nav1";
import { Nav2 } from "./Nav2";
export function NavBar(){
    const login = useAuthStore((state) => state.isLoggedIn);
    return(
        <>
            {login ? <Nav1/> : <Nav2/>}
        </>
    );
}