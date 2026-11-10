import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log('Novo valor:', valor);
  }, [valor]);

  const titulo = 'Valor: ' + valor;

  return (
    <View style={{ padding: 20 }}>
      <Text>{titulo}</Text>
      <Button title="Somar 1" onPress={() => setValor(valor + 1)} />
    </View>
  );
}
