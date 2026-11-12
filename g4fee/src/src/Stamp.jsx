import React, { useState } from "react";

export function Stamp(){
    const [msg, setMsg] = useState("");

    const stamp = { section: "G4" , roll_number: "0092", name:"Akhilesh"};

    function handleClick(){
        // Saves to localStorage under the key "stamp"
        localStorage.setItem("stamp", JSON.stringify(stamp));
        setMsg("updated");

        // CRUCIAL FIX: Tell the Footer component that data was updated right now!
        window.dispatchEvent(new Event("storageUpdated"));
    }

    return (
        <div className="box2 mt2">
            <h3>We have got stamp data</h3>
            <br/>
            {msg === "" && <button onClick={handleClick}>Click here</button>}
            {msg === "updated" && <p className="bg1 p1">Stamp created</p>}
        </div>
    );
}
