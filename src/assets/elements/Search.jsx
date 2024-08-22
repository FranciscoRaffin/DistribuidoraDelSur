import { useState } from 'react';
import './../styles/Search.css';

// eslint-disable-next-line react/prop-types
export function Search({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search">
            <input 
                placeholder="🔍 Buscar por nombre o ID" 
                type="text" 
                value={searchTerm} 
                onChange={handleChange} 
            />
            <button type="submit" onClick={handleSearch}>Buscar</button>
        </div>
    );
}
