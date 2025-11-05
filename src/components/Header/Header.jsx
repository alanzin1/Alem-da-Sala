import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
export default function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo Além da Sala" className={styles.logo} />
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar projeto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
    </header>
  );
}
