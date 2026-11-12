import { useState, useRef } from  "react";

export function RlDemo() {
    const r1 = useRef(0);
    const [s1, setS1] = useState(0);

    return (
        <div className="box1 bg1 fyc">
            <h3> useRef vs useState </h3>

            <button className="btn2" onClick={() => (r1.current = r1.current + 1)}>
                Increment Ref Variable . {r1.current}
            </button>

            <button className="btn2" onClick={() => setS1(s1 + 1)}>
                Increment State Variable . {s1}
            </button>
        </div>
    );
}