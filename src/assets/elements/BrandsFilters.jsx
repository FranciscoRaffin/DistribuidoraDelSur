import { useState } from 'react';
import { marcaImagen } from '../refs';
import './../styles/Branding.css';

export function BrandsFilters() {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const handleClick = (marca) => {
        if (selectedBrand === marca) {
            setSelectedBrand(null); // Desactiva la marca si se hace clic nuevamente
        } else {
            setSelectedBrand(marca); // Activa la nueva marca
        }
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
