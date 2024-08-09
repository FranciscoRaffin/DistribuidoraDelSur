import { TagButton } from "./TagButton";
import {TAGS} from "./../refs";


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
