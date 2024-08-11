import { TAGS } from "./../refs";


// eslint-disable-next-line react/prop-types
export function TagsFilter({ selectedTag, setSelectedTag }) {
    const handleTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null); // Desactiva el tag si se hace clic nuevamente
        } else {
            setSelectedTag(tag); // Activa el nuevo tag
        }
    };

    return (
        <section id='tag-container'>
            {TAGS.map((tag) => (
                <button 
                    key={tag} 
                    className={`button ${selectedTag === tag ? 'active' : ''}`}
                    onClick={() => handleTagClick(tag)}
                >
                    {tag}
                </button>
            ))}
        </section>
    );
}