import { useState, useEffect } from "react";
import { BsTrash3 } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export function StoreApp() {
    const [id, setid] = useState("");
    const [category, setCategory] = useState("");
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");

    const [products, setProducts] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem("products");
        if (data) {
            setProducts(JSON.parse(data));
        }
    }, []);

    const handleDelete = (productId) => {
        const updatedProducts = products.filter((p) => p.id !== productId);
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
    };

    const plist = products.map((p) => (
        <li key={p.id} className="fx mb1">
            <button
                onClick={() => handleDelete(p.id)}
                className="btn1 fyc bg30"
            >
                <BsTrash3 />
            </button>
            {p.id} {p.category} {p.brand} {p.price}/-
        </li>
    ));

    const handleAdd = (e) => {
        e.preventDefault();
        const newProduct = {
            id: id,
            category: category.trim(),
            brand: brand.trim(),
            price: price,
        };

        const updatedProducts = [...products, newProduct];
        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setid("");
        setCategory("");
        setBrand("");
        setPrice("");
    };

    return (
        /* The root container wrapper */
        <section className="hf bg20 p3">
            
            {/* Added container layout container (.c1 handles mobile stacked & desktop side-by-side) */}
            <div className="c1" style={{ gap: "1.5rem" }}>
                
                {/* Add Product Section (changed width control to style/flex growth) */}
                <section className="b1 p2" style={{ flex: "1", height: "fit-content" }}>
                    <h3>Add Product</h3>
                    <br />
                    <form onSubmit={handleAdd} className="fy w100">
                        <input
                            type="text"
                            placeholder="ID"
                            value={id}
                            onChange={(e) => setid(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Brand"
                            value={brand}
                            onChange={(e) => setBrand(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                        <button type="submit" className="btn1 fyc bg30 mt1" style={{ width: "fit-content", padding: "8px 12px" }}>
                            Add Product
                        </button>
                    </form>
                </section>

                {/* Product List Section (changed width control to flex: 2 so it takes more horizontal space) */}
                <section className="b1 p2" style={{ flex: "2" }}>
                    <h3>Product List ({products.length})</h3>
                    <br />
                    <ul style={{ paddingLeft: "0", listStyleType: "none" }}>{plist}</ul>
                </section>

            </div>
        </section>
    );
}