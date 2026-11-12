import React, { useEffect, useState } from "react";

function ShowList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");
        try {
            data = JSON.parse(data) || [];
        } catch {
            data = [];
        }

        setProducts(Array.isArray(data) ? data : []);
    }, []);

    return (
        <section className="fyc">
            <div className="b1" style={{ padding: "1rem" }}>
                <h3>List of Products</h3>
                <div className="bg1" style={{ display: "flex", fontWeight: "bold" }}>
                    <span style={{ width: "3rem" }}>ID</span>
                    <span style={{ width: "7rem" }}>Brand</span>
                    <span style={{ width: "7rem" }}>Price(Rs.)</span>
                </div>

                {products.map((item) => (
                    <div
                        key={item.id}
                        style={{ display: "flex" }}>
                        <span style={{ width: "3rem" }}>{item.id}</span>
                        <span style={{ width: "7rem" }}>{item.brand}</span>
                        <span style={{ width: "7rem" }}> {item.price}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ShowList;