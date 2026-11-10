import { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {
    if (texto !== '') {
      setTarefas([...tarefas, texto]);
      setTexto('');
    }
  }

  function removerTarefa(index) {
    setTarefas(tarefas.filter((_, i) => i !== index));
  }

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite uma tarefa"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Adicionar" onPress={adicionarTarefa} />

      <FlatList
        data={tarefas}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item, index }) => (
          <View style={{ marginTop: 10 }}>
            <Text>{item}</Text>
            <Button title="Remover" onPress={() => removerTarefa(index)} />
          </View>
        )}
      />
    </View>
  );
}
