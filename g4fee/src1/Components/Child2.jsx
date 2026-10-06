export function Child2({ count, setCount }) {
    function handleClick() {
        setCount((previous) => previous + 1);
    }

    return (
        <div className="bg50 p2 mt2 box1 fy jsb">
            <p>Child Component 2</p>
            <div>
                <button className="btn2" onClick={handleClick}>
                    Increment
                </button>
                <span className="sp2">{count}</span>
            </div>
        </div>
    );
}