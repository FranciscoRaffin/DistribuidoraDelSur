import './Content.css';
import { Card } from './Card';
import { useState, useEffect } from 'react';
import { productos as obtenerProductos } from '../logic/Productos';

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
                    precio={parseFloat(producto.precio_final)}
                    img={producto.img || marcaImagen[producto.marca] || IMAGEN_DEFAULT}
                />
            ))}
        </div>
    );
}

const IMAGEN_DEFAULT = "https://mui.today/__export/1602378684955/sites/mui/img/2020/10/10/58.jpg_693687776.jpg"

let marcaImagen = {
    "Billiken": "https://1.bp.blogspot.com/-T-GLRiXzTOU/Vf8uvm9SRYI/AAAAAAAAAEY/ANqU7OKRssM/s1600/LOGO%2BBilliken%2B88%2Bcopia.gif",
    "Georgalos":"https://th.bing.com/th/id/R.3c986af6c42f341cb6f92b69590c5b60?rik=k9iqWAqhBjtWbA&riu=http%3a%2f%2flucacen.com.ar%2fwp-content%2fuploads%2f2018%2f03%2fgeorgalos-w.jpg&ehk=fhnB%2b%2fXEcJPgH0qpMrv%2fuJHaAue%2fQ0vji48%2b2Z4Rua8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    "Lheritier": "https://iconape.com/wp-content/png_logo_vector/lheritier-logo.png",
    "Dorins":"https://d3340tyzmtlo4u.cloudfront.net/users/864/images/feature_variant/8/dorins-logo-1.jpg?t=1679072327",
    "Benevia":"https://glomarkint.com/wp-content/uploads/2022/01/Logo-Benevia-01.png"

    
}