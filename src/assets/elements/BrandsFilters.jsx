import { useState } from 'react';
import { marcaImagen } from '../refs';
import './../styles/Branding.css';

// eslint-disable-next-line react/prop-types
export function BrandsFilters({ setSelectedBrand }) {
    const [selectedBrand, setLocalSelectedBrand] = useState(null);

    const handleClick = (marca) => {
        const newBrand = selectedBrand === marca ? null : marca;
        setLocalSelectedBrand(newBrand);
        setSelectedBrand(newBrand); // Actualiza la marca seleccionada en el componente padre
    };

    return (
        <>
            <section id='brand-container'>
                {Object.entries(marcaImagen).map(([marca, imagenURL]) => (
                    <img 
                        className={`brand-icon ${selectedBrand === marca ? 'active' : ''}`} 
                        key={marca} 
                        src={`${imagenURL}`} 
                        alt={marca} 
                        onClick={() => handleClick(marca)}
                    />
                ))}
            </section>
        </>
    );
}
