import './Content.css';
import { Card } from './Card';
import { useState, useEffect } from 'react';
import { productos as obtenerProductos } from '../logic/Productos';
import {marcaImagen} from './Branding';

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
                    precio={producto.precio_final}
                    img={producto.img || marcaImagen[producto.marca] || IMAGEN_DEFAULT}
                />
            ))}
        </div>
    );
}

const IMAGEN_DEFAULT = "https://mui.today/__export/1602378684955/sites/mui/img/2020/10/10/58.jpg_693687776.jpg"

