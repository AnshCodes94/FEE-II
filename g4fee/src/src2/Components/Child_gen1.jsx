import { useContext } from "react";
import { LoginContext } from "../App";
import { Child_gen2 } from "./Child_gen2.jsx";

export function Child_gen1() {
    const login = useContext(LoginContext);
    return (
        <div className="b1 fyc bg51 p3">
            <h3>Level - B : child of Level A</h3>
            <h2 style={{ color: "yellow" }}>
                Value of login Status: {login ? "Logged In" : "Logged Out"}
            </h2>
            <h4>Show Login Status using Context created at level A</h4>
            <Child_gen2 />
        </div>
    );
}