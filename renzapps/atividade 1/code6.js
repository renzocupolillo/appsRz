import React from 'react';
import { View, Button, TouchableOpacity, Text, Alert } from 'react-native';

export default function App() {
  return (
    <View>
      <Button
        title="Clique"
        onPress={() => Alert.alert('Oi!')}
      />

      <TouchableOpacity onPress={() => Alert.alert('Toque!')}>
        <Text>Botão personalizado</Text>
      </TouchableOpacity>
    </View>
  );
}