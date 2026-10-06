import { useMemo, useState } from "react";

export function App_usememo() {
    const [count, setCount] = useState(0);

    const result = useMemo(() => {
        console.log("calculation started...");
        let total = 0;
        for (let i = 0; i <= 5000; i++) {
            total += i;
        }
        return total;
    }, []);

    return (
        <div className="memo-demo bg50 p2">
            <h2 className="mb2">Demo of useMemo hook</h2>

            <h3>Sum of numbers from 0 to 5000</h3>
            <h3 className="box1 bh5 fyc">Result: {result}</h3>

            <button className="btn2 fs3" onClick={() => setCount((value) => value + 1)}>
                Counter +1
            </button>
            <span className="mt2 sp3 fs3">
                <strong>{count}</strong>
            </span>
            <h3 className="mt2">
                Now click the counter and check console for messages regarding
                how many times calculation started.
            </h3>
        </div>
    );
}