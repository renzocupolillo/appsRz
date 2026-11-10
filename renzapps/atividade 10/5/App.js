import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [jogo, setJogo] = useState({
    pontos: 0,
    vidas: 3
  });

  function acertar() {
    setJogo({ ...jogo, pontos: jogo.pontos + 1 });
  }

  function errar() {
    if (jogo.vidas > 0) {
      setJogo({ ...jogo, vidas: jogo.vidas - 1 });
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text>Pontos: {jogo.pontos}</Text>
      <Text>Vidas: {jogo.vidas}</Text>
      <Button title="Acertar" onPress={acertar} />
      <Button title="Errar" onPress={errar} />
    </View>
  );
}
