import { StyleSheet, Text, View} from 'react-native';

export default function App(){
  return(
    <view><Text style={styles.titulo}>Título</Text>
  </view>)
}
const styles = StyleSheet.create({
titulo: { fontSize: 22, color: 'tomato' },
});