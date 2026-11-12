import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Contact } from "./pages/Contact.jsx";

import { ShowList2 } from "./ShowList2.jsx";

export function MyApp() {
    return (
        <>
            <nav className="fxc bg1" style={{ height: "5rem" }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/showList2">Product</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/showList2" element={<ShowList2 />} />
            </Routes>
        </>
    );
}