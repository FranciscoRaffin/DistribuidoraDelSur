import { TagButton } from "./TagButton";
const TAGS = ["Gomita", "Caramelo", "Masticable", "Oblea", "Pastilla"]

export function TagsFilter() {
    return (
        <>
        <section id='brand-container'>

            {TAGS.map((tag) => (
                <TagButton key={tag}>{tag}</TagButton>
            )) }

        </section>
        </>
    );
}
