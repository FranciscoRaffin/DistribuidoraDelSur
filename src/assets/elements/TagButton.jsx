import './../styles/TagButton.css';
import PropTypes from 'prop-types';

export function TagButton({ children, isActive, onClick }) {
    return (
        <button 
            className={`button ${isActive ? 'active' : ''}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

TagButton.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};
