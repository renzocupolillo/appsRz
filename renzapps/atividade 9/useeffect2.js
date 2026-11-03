import React, { useState, useEffect } from "react";

function DetalhePost({ postId }) {
  const [post, setPost] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregarPost() {
      setPost(null);
      setCarregando(true);
      setErro(null);

      try {
        const resposta = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        if (!resposta.ok) {
          throw new Error("Não foi possível carregar a postagem.");
        }

        const dados = await resposta.json();
        setPost(dados);
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    if (postId) {
      carregarPost();
    } else {
      setCarregando(false);
    }
  }, [postId]);

  if (carregando) {
    return <p>Carregando postagem...</p>;
  }

  if (erro) {
    return <p>Erro: {erro}</p>;
  }

  if (!post) {
    return <p>Nenhuma postagem encontrada.</p>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default DetalhePost;