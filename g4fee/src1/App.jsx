import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { About } from "./Pages/About.jsx";
import { Product } from "./Pages/Products.jsx";
import { Layout } from "./Components/Layout.jsx";
import { ProtectedRoutes } from "./utils/ProtectedRoutes.jsx";
import { Product1 } from "./Pages/Product1.jsx";
import { Product2 } from "./Pages/Product2.jsx";
import { Product3 } from "./Pages/Product3.jsx";
import { PageNotFound } from "./Pages/PageNotFound.jsx";

export function App() {
    return (
        <div>
            <BrowserRouter>
                <Layout />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route element={<ProtectedRoutes />}>

                    {/* Products Sidebar Page with Nested Sub-routes */}
                    <Route path="/products" element={<Product />}>
                        <Route path="product1" element={<Product1 />} />
                        <Route path="product2" element={<Product2 />} />
                        <Route path="product3" element={<Product3 />} />
                    </Route>
                    </Route>

                    <Route path="/login" element={<h2>Login</h2>} />

                    {/* Catch-all route for Inventory & 404 Page */}
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}