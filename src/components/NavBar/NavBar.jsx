import { useState } from "react";
import styles from "./Navbar.module.css";

export default function NavBar({ tags, selectedTags, onFilterChange }) {
  const handleTagClick = (tag) => {
    if (tag === "Todos") {
      onFilterChange(["Todos"]);
      return;
    }

    let updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];

    // Garante que "Todos" sempre esteja presente
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
          className={`${styles.tagButton} ${
            selectedTags.includes(tag) ? styles.active : ""
          }`}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}
