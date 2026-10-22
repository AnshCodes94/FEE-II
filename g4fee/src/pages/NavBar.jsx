import { useAuthStore } from "./useAuthStore";
import { Nav1 } from "./Nav1";
import { Nav2 } from "./Nav2";
export function NavBar(){
    const login = useAuthStore((state) => state.isLoggedIn);
    return(
        <>
            <div className="bh5" style={{ borderBottom : "1px solid silver"}}>
                {login ? <Nav1/> : <Nav2/>}
            </div>
        </>
    );
}