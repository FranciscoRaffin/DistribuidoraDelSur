import './Content.css'
import { Card } from './Card'

export function Content() {
    return ( <div id="contenido">
       <Card className="card" nombre="Producto 2" marca="Marca 2" precio="200" />
       <Card nombre="Producto 22" marca="Marca 23" precio="300" />
       
       </div>
    );
}