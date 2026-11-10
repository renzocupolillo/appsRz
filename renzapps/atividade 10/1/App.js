import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text>Numero: {numero}</Text>
      <Button title="+" onPress={() => setNumero(numero + 1)} />
      <Button title="-" onPress={() => setNumero(numero - 1)} />
    </View>
  );
}
