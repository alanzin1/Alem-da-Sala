import { FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../../assets/logo.png";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Área da logo e descrição */}
        <div className={styles.logoArea}>
          <img src={logo} alt="Logo Além da Sala" className={styles.logo} />
          <p>
            Central de atividades extracurriculares
            <br />
            da UFC — Campus de Russas
          </p>
        </div>

        {/* Contatos */}
        <div className={styles.contact}>
          <a href="mailto:alemdasala@gmail.com" className={styles.link}>
            <FaEnvelope /> alemdasala@gmail.com
          </a>
          <a
            href="https://instagram.com/alemdasala"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <FaInstagram /> @alemdasala
          </a>
        </div>
      </div>

      {/* Rodapé inferior */}
      <p className={styles.copy}>
        © 2025 Além da Sala — Universidade Federal do Ceará
      </p>
    </footer>
  );
}
