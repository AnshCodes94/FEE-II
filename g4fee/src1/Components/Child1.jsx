export function Child1({ count, setCount }) {
    function handleClick() {
        setCount((previous) => previous + 1);
    }

    return (
        <div className="bg40 p2 mt2 box1 fy jsb">
            <p>Child Component 1</p>
            <div>
                <button className="btn2" onClick={handleClick}>
                    Counter
                </button>
                <span className="sp2">{count}</span>
            </div>
        </div>
    );
}