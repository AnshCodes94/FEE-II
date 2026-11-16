import { lazy, Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const Home = lazy(() => import("./Home"));

const StudentsApp = lazy(() => import("./StudentsApp"));

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Router>
            <ToastContainer position="top-right" autoClose={2000} />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<StudentsApp />} />
                    <Route path="/logout" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    </StrictMode>
);