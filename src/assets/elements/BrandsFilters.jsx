import {marcaImagen} from '../refs';
import './../styles/Branding.css'


export function BrandsFilters() {
    return (
        <>
        <section id='brand-container'>
            {Object.entries(marcaImagen).map(([marca, imagenURL]) => (
                <img className='brand-icon' key={marca} src={`${imagenURL}`} alt={marca} />
            ))}
        </section>
        </>
    );
}


