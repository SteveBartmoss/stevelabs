import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { NavBar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";


export function MainRouter(){
    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}