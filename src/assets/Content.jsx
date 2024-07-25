import './Content.css'
import { Card } from './Card'

export function Content() {
    return ( <div id="contenido">
       <Card 
       nombre="Producto 2" 
       marca="Marca 2" 
       precio="200" 
       
       />


       <Card nombre="Producto 22" marca="Marca 23" precio="300" />
       <Card nombre="FJYSEI" marca="Marca DF23" precio="300" />
       <Card nombre="TEST" marca="TEST DF23" precio="3000" />

       </div>
    );
}