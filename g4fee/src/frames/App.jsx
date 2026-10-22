import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore.jsx";
import { NavBar } from "../pages/NavBar.jsx";
import { SignIn } from "../pages/SignIn.jsx";
import { SignUp } from "../pages/SignUp.jsx";
import { Products } from "../../src1/Pages/Products.jsx";
import { ProductList } from "../../src1/Pages/ProductList.jsx";
import bmwImage from "./images/bmw.jpg";

export function App() {
    const login = useAuthStore((state) => state.isLoggedIn);
    const Slogin = useAuthStore((state) => state.login);

    return (
        <>
            <div
                className="hf bgi"
                style={{
                    backgroundImage: `url(${bmwImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: "#fff",
                }}
            >
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<h3>Home Page</h3>} />
                        <Route path="/about" element={<h3>About</h3>} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/products" element={<Products />}>
                            <Route index element={<h3>Product</h3>} />
                            <Route path=":category" element={<ProductList />} />
                        </Route>
                        <Route path="*" element={<h3>Page Not Found</h3>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}