import imgUrl from "./images/harry.jpg";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    function login() {
        navigate("/login");
    }

    return (
        <div className="hf bgi" style={{ backgroundImage: `url(${imgUrl})` }}>
            <nav className="fxc p1">
                <button
                onClick={login}
                className="bg20 b1 fsm px2 sh2"
                style={{ color: "silver" }}
                >
                Login
                </button>
            </nav>
        </div>
    );
}