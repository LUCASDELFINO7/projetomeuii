import React from "react";
import './Home.css'



function Home(){
    return(

        <div className='center'>
         <ul id="menu">
        <li>
            <a href="index.html"> Inicio </a>
        </li>

        <li>
            <a href=""> Quem Somos </a>
        </li>

        <li>
            <a href=""> Contato </a>
        </li>

        <li>
            <a href=""> Trabalhe Conosco </a>
        </li>
    </ul>
        </div>
    );

}


export default Home;