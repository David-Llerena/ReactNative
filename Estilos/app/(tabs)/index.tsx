import { Image, StyleSheet, Platform, View, Text, Button, Alert, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function HomeScreen() {
  return (
    <View style={styles.container}> 
      <Button 
      title="COMP 1"  
      />
      <Button 
      title="COMP 2"  
      color="green" />
      <Button 
      title="COMP 3"  
      />
      <Text>ESTILOS</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // flexDirection: 'row', // el contenido de izquierda a derecha
    flexDirection: 'column', // el contenido de arriba a abajo, es el valor por defecto
    justifyContent: 'center',//centra el contenido de izquierda a derecha, afecta al eje principal
    alignItems: 'center',//afecta al eje secundario, en este caso de arriba a abajo

  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
