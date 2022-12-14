import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import { CartWidget } from '../CartWidget/CartWidget';
import { Link as LinkRRD, NavLink } from "react-router-dom";

const Navbar = () => {

    const categorias = [
        
        { nombre: "Electronics", id: 0, ruta: "/categoria/electronics" },
        { nombre: "Jewelery", id: 1, ruta: "/categoria/jewelery" },
        { nombre: "Men's Clothing", id: 2, ruta: "/categoria/men's clothing" },
        { nombre: "Women's Clothing", id: 3, ruta: "/categoria/women's clothing" },
        
];

    return (
        <>
        <header>
            <LinkRRD className='link'  to="/">
                <img className='linkImg' src={logo} alt="tienda online" />
            </LinkRRD>      

            <nav>
                {categorias.map((categoria) => {
                    return <NavLink className="navLink" key={categoria.id} to={categoria.ruta}><ul><li>{categoria.nombre}</li></ul></NavLink>
                })}
            </nav>

            <LinkRRD to="/cart">
                <CartWidget />
            </LinkRRD> 
        </header>
    </>
    )
}

export default Navbar


//{/* <ul>
  //          <li><a href="#">Panadería</a></li>
   //         <li><a href="#">Facturas</a></li>
   //         <li><a href="#">Catering</a></li>
    // </ul> */}



//desestructuracion de codigo
//const array = [1,2,3];
//const uno = array[0]
//const dos = array[1]
//const tres = array[2]
//es lo mismo khacer eso:
//const [uno, dos, tres]= array
//console.log(uno);//1

//otra opcion...
/* const objeto ={
    x:1,
    y:2,
} */

//const {x:x, y:y}= objeto
//console.log(x);//1
//console.log(y);//2
