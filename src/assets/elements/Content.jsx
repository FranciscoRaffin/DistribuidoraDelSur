import './../styles/Content.css';
import { Card } from './Card';
import { useState, useEffect } from 'react';
import { productos as obtenerProductos } from '../../logic/Productos';
import { marcaImagen } from '../refs';
import { IMAGEN_DEFAULT } from "./../refs";




// eslint-disable-next-line react/prop-types
export function Content({ selectedBrand, selectedTag, searchTerm }) {
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

    // Filtrado de productos por marca, tipo y búsqueda
    const filteredProductos = productosData.filter((producto) => {
        const matchesBrand = selectedBrand ? producto.marca === selectedBrand : true;
        const matchesTag = selectedTag ? producto.tipo === selectedTag : true;
        const matchesSearchTerm = searchTerm
            // eslint-disable-next-line react/prop-types
            ? producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || producto.id.includes(searchTerm)
            : true;
        return matchesBrand && matchesTag && matchesSearchTerm;
    });

    return (
        <div className='container' id="contenido">
            {filteredProductos.map((producto, index) => (
                <Card 
                    key={index}
                    id={producto.id}
                    nombre={producto.nombre} 
                    marca={producto.marca} 
                    precio={parseInt(producto.precio_final)}
                    img={producto.img || marcaImagen[producto.marca] || IMAGEN_DEFAULT}
                />
            ))}
        </div>
    );
}
