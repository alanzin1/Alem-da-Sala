import styles from "./NavBar.module.css";

export default function NavBar({ tags, selectedTags, onFilterChange }) {
  const handleTagSelect = (tag) => {
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
          onPointerDown={() => handleTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}
