import Card from "../Card/Card";
import styles from "./CardCarousel.module.css";

export default function CardCarousel({ titulo, projetos }) {
  if (projetos.length === 0) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.titulo}>{titulo}</h2>
      <div className={styles.carousel}>
        {projetos.map((p) => (
          <Card key={p.id} projeto={p} />
        ))}
      </div>
    </section>
  );
}
