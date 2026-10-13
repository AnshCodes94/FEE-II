import { useContext } from "react";
import { DarkModeContext } from "../App";

export function Child_gen2() {
    const darkMode = useContext(DarkModeContext);
    return (
        <div className="b1 fyc bg52 p3">
            <h3>Level - C : child of Level B</h3>
            <h2 style={{ color: "yellow" }}>
                Value of Dark Mode is: {darkMode ? "ON" : "OFF"}
            </h2>
            <h4>Show Dark Mode Status using Context created at level A</h4>
        </div>
    );
}