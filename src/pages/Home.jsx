import { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import data from "../data/data.json";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState(["Todos"]);
  const [filteredData, setFilteredData] = useState(data);

  const tags = [
    "Todos",
    "Ciência da Computação",
    "Engenharia de Software",
    "Engenharia de Produção",
    "Engenharia Mecânica",
    "Engenharia Civil",
    "Cultural",
    "Evento",
    "Empresa Júnior",
    "Extensão",
  ];

  const handleFilterChange = (updatedTags) => {
    setSelectedTags(updatedTags);
  };

  useEffect(() => {
    let filtered = data;

    // 🔍 Filtro por texto
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.nome.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 🎯 Filtro de tags combinadas (interseção)
    const activeFilters = selectedTags.filter((t) => t !== "Todos");

    if (activeFilters.length > 0) {
      filtered = filtered.filter((p) =>
        activeFilters.every((tag) => {
          // transforma curso e tags em arrays para garantir compatibilidade
          const cursos = Array.isArray(p.curso) ? p.curso : [p.curso];
          const tagsAtividade = Array.isArray(p.tags) ? p.tags : [];

          // junta tipo, cursos e tags em um único array para verificar
          const campos = [p.tipo, ...cursos, ...tagsAtividade];

          return campos.some(
            (campo) =>
              typeof campo === "string" &&
              campo.toLowerCase().includes(tag.toLowerCase())
          );
        })
      );
    }

    setFilteredData(filtered);
  }, [searchTerm, selectedTags]);

  // Agrupa por tipo
  const categorias = [...new Set(filteredData.map((p) => p.tipo))];

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NavBar
        tags={tags}
        selectedTags={selectedTags}
        onFilterChange={handleFilterChange}
      />

      <main>
        {categorias.map((cat) => {
          const projetosCategoria = filteredData.filter((p) => p.tipo === cat);
          return (
            <CardCarousel key={cat} titulo={cat} projetos={projetosCategoria} />
          );
        })}
      </main>
    </>
  );
}
