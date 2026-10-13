import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export function ProductList(){
    const {category} = useParams();

    const [products, setProducts] = useState([]);
    useEffect(() =>{
        const storedProducts = localStorage.getItem("products");
        const arrayObject = storedProducts ? JSON.parse(storedProducts) : [];
        setProducts(arrayObject);
    }, []);
    const plist = products.filter((p) => p.category === category);
    const cards = plist.map((p) =>(
        <div key={p.id} className="card2 p2 fx sh2">
            <div className="w50">Image</div>
            <div className="w50 fy jsb">
                id: {p.id}
                <br/> {p.brand}
                <br/> Price:{p.price}/-
                <br/> <button className="bg50">Add to Cart</button>
                {/* <button>More Details</button> */}
            </div> 
        </div>
    ));
    return (
        <div>
            <h3>Product Category : {category}</h3>
            <div className="fx mt2" style={{ flexWrap: "wrap"}}>
                {cards}
            </div>
        </div>
    );
}