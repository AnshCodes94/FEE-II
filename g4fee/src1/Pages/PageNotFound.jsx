import { useNavigate } from "react-router-dom";
export function PageNotFound(){
    const navigate = useNavigate();
    return (
        <>
            <section className="h95 fyc">
                <div className="box2 p2 bg50 fy jsb">
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ color: "yellow" }}>404</h1>
                        <h4>
                            we dont have the page requested by you,
                            <br/>May be under construction...
                        </h4>
                    </div>
                    <button onClick={() => navigate("/")}>Go Home</button>
                </div>
            </section>
        </>
    );
}