import { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Fixed: Lowercase createRoot
import "../index3.css";
import { App } from "./App.jsx"; // Fixed: Imported from local file, not "react"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App_usememo /> */}
    {/* <StateLifting /> */}
    <div className='hf bgl'>
    <App/> 
    </div>
    <ToastContainer theme="light" position="top-center" autoClose={2000} />
  </StrictMode>
);