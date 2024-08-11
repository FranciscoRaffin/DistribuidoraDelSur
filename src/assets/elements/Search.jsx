import './../styles/Search.css';

export function Search() {
    return (
        <div className="search">
            <input placeholder="Algo particular?" type="text" />
            <button type="submit">Buscar</button>
        </div>
    );
}
