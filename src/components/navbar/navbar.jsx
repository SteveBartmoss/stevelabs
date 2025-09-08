import { NavLink } from "react-router-dom";
import './navbar.css'

export function NavBar(){
    return(
        <>
            <div className="div-nav-bar">
                <NavLink to={"/"}>Inicio</NavLink>
                <NavLink to={'/proyectos'}>Proyectos</NavLink>
                <NavLink to={'/cursos'}>Cursos</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
        </>
    )
}