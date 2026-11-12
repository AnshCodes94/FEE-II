import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Store from './Store.jsx'
// import ShowList from './ShowList.jsx'
// import { ShowList2 } from "./ShowList2.jsx";
// import { RlDemo } from "./RlDemo.jsx";
// import { Footer } from "./Footer.jsx";
// import { Stamp } from "./Stamp.jsx";
// import { Header } from "./Header.jsx";
// import { Notes } from "./Notes.jsx";
import { MyApp } from "./MyApp.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header/> */}
    {/* <Footer/> */}
    {/* <Stamp/> */}
    {/* <Notes/> */}
    {/* <ShowList2/> */}
    {/* <Store/> */}
    {/* <RlDemo/> */}
    {/* <ShowList/> */}
    {/* <App /> */}
    <BrowserRouter>
      <MyApp/>
    </BrowserRouter>
  </StrictMode>,
)