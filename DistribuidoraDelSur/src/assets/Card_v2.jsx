import './Card_v2.css'
import PropTypes from 'prop-types';

export function Card ({nombre, marca, precio}) {
    return (
        <div className="card">
        <div className="card-img"></div>
        <div className="card-info">
          <p className="text-title">{nombre}</p>
          <p className="text-body">{marca}</p>
        </div>
        <div className="card-footer">
        <span className="text-title">${precio}</span>
      </div></div>
    )

}


Card.propTypes = {
    nombre: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired
};