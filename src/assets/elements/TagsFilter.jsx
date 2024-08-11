import { TagButton } from "./TagButton";
import { TAGS } from "./../refs";
import { useState } from "react";

export function TagsFilter() {
    const [activeTag, setActiveTag] = useState(null);

    const handleClick = (tag) => {
        if (activeTag === tag) {
            setActiveTag(null); // Desactiva el botón si se hace clic nuevamente
        } else {
            setActiveTag(tag); // Activa el nuevo botón
        }
    };

    return (
        <>
        <section id='tag-container'>
            {TAGS.map((tag) => (
                <TagButton 
                    key={tag} 
                    isActive={activeTag === tag} 
                    onClick={() => handleClick(tag)}
                >
                    {tag}
                </TagButton>
            )) }
        </section>
        </>
    );
}
