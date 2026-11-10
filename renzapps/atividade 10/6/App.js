import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

function Componente() {
  useEffect(() => {
    console.log('Componente montado');

    return () => {
      console.log('Componente desmontado');
    };
  }, []);

  return <Text>Componente está na tela.</Text>;
}

export default function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Mostrar / Esconder componente"
        onPress={() => setMostrar(!mostrar)}
      />
      {mostrar && <Componente />}
    </View>
  );
}
