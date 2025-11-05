import styles from "./Card.module.css";

export default function Card({ projeto }) {
  return (
    <div className={styles.card}>
      <img
        src={projeto.imagemPrincipal}
        alt={projeto.nome}
        className={styles.image}
      />
      <div className={styles.info}>
        <h3 className={styles.nome}>{projeto.nome}</h3>
        <p className={styles.tipo}>{projeto.tipo}</p>
        <p className={styles.descricao}>{projeto.descricao}</p>
      </div>
    </div>
  );
}
