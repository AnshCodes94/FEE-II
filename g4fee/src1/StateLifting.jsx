import { useState } from "react";
import { Child1 } from "./Components/Child1";
import { Child2 } from "./Components/Child2";

export function StateLifting() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount((previous) => previous + 1);
    }

    return (
        <div className="state-demo p2 bg50">
            <h3 className="mb2">Demonstration of State Lifting and State Sharing</h3>

            <div className="b1 p2 w50">
                <div className="fx jsb">
                    <div>Parent Component</div>
                    <div>
                        <button className="btn2" onClick={handleClick}>
                            Counter
                        </button>
                        <span className="p2 sp2">{count}</span>
                    </div>
                </div>
                <div className="fx">
                    <Child1 count={count} setCount={setCount} />
                    <Child2 count={count} setCount={setCount} />
                </div>
            </div>
        </div>
    );
}