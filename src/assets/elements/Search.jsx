import './../styles/Search.css';

export function Search() {
    return (
        <div className="search">
            <input placeholder="🔍 Buscar por ID" type="text" />
            <button type="submit">Buscar</button>
        </div>
    );
}
