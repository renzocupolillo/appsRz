import { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (texto === '') {
        setUsuarios([]);
      } else {
        fetch('https://jsonplaceholder.typicode.com/users?name_like=' + texto)
          .then(response => response.json())
          .then(data => setUsuarios(data));
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [texto]);

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Buscar usuário"
        value={texto}
        onChangeText={setTexto}
      />
      <FlatList
        data={usuarios}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
