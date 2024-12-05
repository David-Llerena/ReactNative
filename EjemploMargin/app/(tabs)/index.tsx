import { Image, StyleSheet, Platform, View, Text, Button, Alert, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [nombre,setNombre] = useState('');
  const [apellido,setApellido] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>EJEMPLO MARGIN</Text>
      <TextInput
        style={styles.caja}
        value={nombre}
        onChangeText={setNombre}
        placeholder='Ingrese su nombre'
      /> 
      <TextInput
        style={styles.caja}
        value={apellido}
        onChangeText={setApellido}
        placeholder='Ingrese su apellido'
      /> 
      <Button
        title="OK"
      />
      <StatusBar style='auto'/>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
      paddingHorizontal: 10,
    },
    caja:{
      borderColor: 'gray',
      borderWidth: 1,
      paddingTop: 5,
      paddingHorizontal: 10,
      marginBottom:10,
      // margin: 10,
      // padding: 10,
      // backgroundColor: 'red',
  },
  titulo:{
    fontSize: 14,
    marginBottom: 16,
    // fontStyle: 'italic',
    fontWeight: 'bold',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});
