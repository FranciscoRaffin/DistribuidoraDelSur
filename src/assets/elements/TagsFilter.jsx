import { TagButton } from "./TagButton";
import { TAGS } from "./../refs";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function TagsFilter({ selectedTag, setSelectedTag }) {
    const [activeTag, setActiveTag] = useState(null);

    const handleTagClick = (tag) => {
        setSelectedTag((selectedTag === tag) ? null : tag)
        setActiveTag((activeTag === tag) ? null : tag)
    };

    return (
        <section id='tag-container'>
            {TAGS.map((tag) => (
                <TagButton 
                    isActive={activeTag === tag} 
                    key={tag} 
                    className={`button ${selectedTag === tag ? 'active' : ''}`}
                    onClick={() => handleTagClick(tag)}
                >
                    {tag}
                </TagButton>
            ))}
        </section>
    );
}
