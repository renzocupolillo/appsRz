import {View, Image } from 'react-native';

export default function App(){
  return(
  <View>
    <image
    source={{uri: 'https://www.instagram.com/p/DcKmRcdjfnP/'}}
    style={{ width: 100, height:100 }}
    />
<Image source={require('3.webp')} 
style={{ width: 100, height:100 }}/>

  </View>
  );
}

// Imagem local
