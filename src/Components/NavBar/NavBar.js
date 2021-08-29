import React from 'react';
import CartWidget from './CartWidget';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom'


export const NavBar = () => {
    return (
       
        <header className="encabezado">
            {/* <span> Rey De Urbino </span> */}
            <div>
            <Link to={"/"}>
                <img src={logo} width="100px" alt="logo rey de urbino" />
            </Link>
            </div>
            <nav>
                <ul className="d-flex">
                    <li>
                        <Link className="mx-1" to={"/category/tintos"}>Tintos</Link>
                    </li>
                    <li>
                        <Link className="mx-1" to={"/category/blancos"}>Blancos</Link>
                    </li>
                    <li>
                        <Link className="mx-1" to={"/category/blend"}>Blend</Link>
                    </li>
                    <li>
                        <Link className="mx-1" to={"/category/espumantes"}>Espumantes</Link>
                    </li>
                </ul>
            </nav>
            < CartWidget />
        </header>

        


        




       

    );

}
 

