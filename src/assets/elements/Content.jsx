import './../styles/Content.css';
import { Card } from './Card';
import { useState, useEffect } from 'react';
import { productos as obtenerProductos } from '../../logic/Productos';
import {marcaImagen} from '../refs';
import {IMAGEN_DEFAULT} from "./../refs";

export function Content() {
    const [productosData, setProductosData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await obtenerProductos();
                setProductosData(data);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        }
        fetchData();
    }, []);

    
    return (
        <div id="contenido">
            {productosData.map((producto, index) => (
                
                <Card 
                    key={index}
                    nombre={producto.nombre} 
                    marca={producto.marca} 
                    precio={parseInt(producto.precio_final)}
                    img={producto.img || marcaImagen[producto.marca] || IMAGEN_DEFAULT}
                />
            ))}
        </div>
    );
}



