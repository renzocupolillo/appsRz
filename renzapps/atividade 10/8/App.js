import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setDados(data);
        setCarregando(false);
      })
      .catch(() => {
        setErro(true);
        setCarregando(false);
      });
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" />;
  }

  if (erro) {
    return <Text>Erro ao buscar os usuários.</Text>;
  }

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={dados}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}
