import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Text>Olá, {nome}!</Text>
    </View>
  );
}
