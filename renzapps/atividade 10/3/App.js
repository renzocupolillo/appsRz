import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Mostrar / Esconder"
        onPress={() => setVisivel(!visivel)}
      />
      {visivel && <Text>Você encontrou o segredo!</Text>}
    </View>
  );
}
