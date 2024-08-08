import './TagButton.css';
import PropTypes from 'prop-types';

export function TagButton({ children }) {
    return (
        <button className="button">
            {children}
        </button>
    );
}

TagButton.propTypes = {
    children: PropTypes.node.isRequired,
};