import styles from "./NavBar.module.css";

export default function NavBar({ tags, selectedTags, onFilterChange }) {
  const handleTagClick = (e, tag) => {
    e.preventDefault(); // previne comportamento estranho no mobile
    e.stopPropagation(); // evita conflito com outros listeners

    if (tag === "Todos") {
      onFilterChange(["Todos"]);
      return;
    }

    let updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    if (!updatedTags.includes("Todos")) {
      updatedTags = ["Todos", ...updatedTags];
    }

    onFilterChange(updatedTags);
  };

  return (
    <nav className={styles.navbar}>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          className={`${styles.tagButton} ${
            selectedTags.includes(tag) ? styles.active : ""
          }`}
          onClick={(e) => handleTagClick(e, tag)}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}
