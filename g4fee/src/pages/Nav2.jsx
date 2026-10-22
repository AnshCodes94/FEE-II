import { useNavigate } from "react-router-dom";

export function Nav2(){
    const navigate = useNavigate();

    function handleClick1(){
        navigate("/signin");
    }
    function handleClick2(){
        navigate("/signup");
    }
    return(
        <div>
            <nav className="bh5 fxc jsb p2">
                <div className="fsl">&#9812;</div>
                <div className="fxc">
                    <button onClick={handleClick1} className="bg51">
                        SignIn
                    </button>
                    <button onClick={handleClick2} className="bg41">
                        SignUp
                    </button>
                </div>
            </nav>
        </div>
    );
}