import { IoMdLogOut } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore.jsx";
import { toast } from "react-toastify";

export function Nav1(){
    const user = useAuthStore((state) => state.userName);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    function handleClick(){
        logout();
        toast.success("Logged out Successfully");
        setTimeout(() =>{
            navigate("/");
        },1500);
    }
    return(
        <nav className="bh5 fx jsb p2" style={{ alignItems: "center", borderBottom: "1px solid silver" }}>
            <div className="fsl">&#9812;</div>
            <div className="fxc">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Products</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
            </div>
            <div className="fxc">
                <div>{user}</div>
                <button onClick={handleClick} className="btn4 bg70 fsm fyc">
                    <IoMdLogOut/>
                </button>
            </div>
        </nav>
    );
}