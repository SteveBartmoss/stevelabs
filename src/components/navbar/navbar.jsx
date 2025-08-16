import { NavLink } from "react-router-dom";


export function NavBar(){
    return(
        <>
            <div>
                <NavLink to={"/"}>Inicio</NavLink>
                <NavLink to={'/proyectos'}>Proyectos</NavLink>
                <NavLink to={'/cursos'}>Cursos</NavLink>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
        </>
    )
}