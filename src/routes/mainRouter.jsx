import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Profile } from "../pages/profile";
import { NavBar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";
import { DivHome } from "../components/containers/containers";
import { Proyecst } from "../pages/proyects";
import { NeofetchMain } from "../pages/neofetch/neofetchMain";


export function MainRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <DivHome>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/proyectos" element={<Proyecst />} />
                    <Route path="/neofetch" element={<NeofetchMain />} />
                </Routes>
            </DivHome>
            <Footer />
        </BrowserRouter>
    )
}