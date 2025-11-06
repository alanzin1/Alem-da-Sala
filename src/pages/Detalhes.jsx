import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";
import styles from "./Detalhes.module.css";
import {
  FaInstagram,
  FaGlobe,
  FaLinkedin,
  FaYoutube,
  FaChevronLeft,
} from "react-icons/fa";

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = data.find((p) => p.id === Number(id));

  if (!projeto) {
    return <p>Projeto não encontrado.</p>;
  }

  const { nome, descricao, coordenador, imagemPrincipal, galeria, links } =
    projeto;

  return (
    <div className={styles.container}>
      {/* Botão Voltar */}
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        <FaChevronLeft size={15} /> Voltar
      </button>

      {/* Imagem Principal */}
      <div className={styles.banner}>
        <img src={imagemPrincipal} alt={nome} className={styles.image} />
      </div>

      {/* Nome */}
      <h1 className={styles.titulo}>{nome}</h1>

      {/* Descrição */}
      <section className={styles.descricao}>
        <h2>Descrição</h2>
        <p>{descricao}</p>
      </section>

      {/* Coordenador */}
      {coordenador && (
        <section className={styles.coordenador}>
          <h2>Coordenador</h2>
          <div className={styles.perfil}>
            {coordenador.foto ? (
              <img
                src={coordenador.foto}
                alt={coordenador.nome}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.avatarPlaceholder}>
                <span>👤</span>
              </div>
            )}
            <div>
              <p>
                <b>{coordenador.categoria}</b>
              </p>
              <p>{coordenador.nome}</p>
            </div>
          </div>
        </section>
      )}

      {/* Galeria */}
      {galeria && galeria.length > 0 && (
        <section className={styles.galeria}>
          <h2>Galeria</h2>
          <div className={styles.galeriaGrid}>
            {galeria.map((img, index) => (
              <img key={index} src={img} alt={`Imagem ${index}`} />
            ))}
          </div>
        </section>
      )}

      {/* Links */}
      {links && Object.keys(links).length > 0 && (
        <section className={styles.contatos}>
          <h2>Contatos</h2>
          <div className={styles.botoes}>
            {links.instagram && (
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.instagram}
              >
                <FaInstagram /> Instagram
              </a>
            )}
            {links.website && (
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.website}
              >
                <FaGlobe /> Website
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
              >
                <FaLinkedin /> linkedin
              </a>
            )}
            {links.youtube && (
              <a
                href={links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.youtube}
              >
                <FaYoutube /> YouTube
              </a>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
