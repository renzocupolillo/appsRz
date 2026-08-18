import React, { useState } from 'react';
import { View, TextInput } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');

  return (
    <View>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />
    </View>
  );
}