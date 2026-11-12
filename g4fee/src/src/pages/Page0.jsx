import { BrowserRouter,Routes,Route } from "react-router-dom";
import {SignIn} from "./SignIn";
import {SignUp} from "./SignUp";
 import {useAuthStore} from "../stores/useAuthStore";
 import {DashBoard} from "./DashBoard"; 

 export function Page0(){
    const isLoggedIn = useAuthStore((state)=> state.isLoggedIn);

    return (
        <BrowserRouter>
        <Routes>
<Route path="/signin" element={<SignIn/>}/>
<Route path="/signup" element={<SignUp/>}/>
<Route path="/dashboard" element={isLoggedIn ? <DashBoard/>:<SignIn/>}/>
<Route path="/" element={isLoggedIn ? <DashBoard/>:<SignUp/>}/>
        </Routes>
        </BrowserRouter>
    );
 }