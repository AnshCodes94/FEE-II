import React, { useState } from "react";

function Store() {
    const [msg, setMsg] = useState("");

    const products = [
        { id: 1, brand: "Levis", name: "Product 1", price: 1000 },
        { id: 2, brand: "Wrangler", name: "Product 2", price: 2000 },
        { id: 3, brand: "Puma", name: "Product 3", price: 3000 },
        { id: 4, brand: "Reebok", name: "Product 4", price: 4000 },
        { id: 5, brand: "Under Armour", name: "Product 5", price: 5000 },
        { id: 6, brand: "Pepe", name: "Product 6", price: 8000 }
    ];

    function handleClick() {
        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );
        setMsg("updated");
    }

    return (
        <div className="box1">
            <h3>We have got data of products</h3>
            <br />
            {msg === "" && (
                <button onClick={handleClick}>
                    Update Inventory
                </button>
            )}
            {msg === "updated" && (
                <p>Inventory updated successfully!</p>
            )}
        </div>
    );
}

export default Store;