import { useState } from "react";
import { IoMdLogout } from "react-icons/io";
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Link,
    NavLink,
} from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();

    function handleLogout() {
        props.setLogIn(false);
        navigate("/");
    }

    return (
        <>
        <div className="bh5 px2 fxc jsb" style={{ borderBottom: "1px solid grey" }}>

        </div>
        </>
    );
}