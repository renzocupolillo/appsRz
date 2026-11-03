
import React, { useState, useEffect } from "react";

function Cronometro() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h2>Cronômetro</h2>
      <p>{segundos} segundos</p>
    </div>
  );
}

export default Cronometro;
