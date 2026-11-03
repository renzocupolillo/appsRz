
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function Saudacao() {
  const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.texto}>
        {nome ? `Olá, ${nome}!` : 'Digite algo acima'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
