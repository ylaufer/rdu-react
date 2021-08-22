import React from 'react';
import CartWidget from './CartWidget';
import logo from '../../img/logo.png';


export const NavBar = () => {
    return (
       
        <header className="encabezado">
            {/* <span> Rey De Urbino </span> */}
            <div>
                <img src={logo} width="100px" alt="logo rey de urbino" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Inicio</a>
                    </li>
                    <li>
                        <a href="#">Vinos</a>
                    </li>
                    <li>
                        <a href="#">Cervezas</a>
                    </li>
                    <li>
                        <a href="#">Vermú</a>
                    </li>
                    <li>
                        <a href="#">Gin</a>
                    </li>
                    <li>
                        <a href="#">Grappa</a>
                    </li>
                </ul>
            </nav>
            < CartWidget />
        </header>

        


        




       

    );

}
 

