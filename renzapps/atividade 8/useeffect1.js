import React, { useState, useEffect } from "react";

function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarUsuarios() {
      try {
        const resposta = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!resposta.ok) {
          throw new Error("Erro ao buscar usuários");
        }

        const dados = await resposta.json();
        setUsuarios(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarUsuarios();
  }, []);

  if (carregando) {
    return <p>Carregando usuários...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>

      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <strong>{usuario.name}</strong>
            <br />
            E-mail: {usuario.email}
            <br />
            Cidade: {usuario.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;