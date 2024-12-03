import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';



import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [dollars, setDollars] = useState("");
  const [result, setResult] = useState('');

  const convertToPesosMexicanos = () => {
    const pesos = parseFloat(dollars) * 20; // Supongamos que 1 USD = 20 MXN
    setResult(`${pesos} Pesos Mexicanos`);
  };

  const convertToPesosColombianos = () => {
    const pesos = parseFloat(dollars) * 3800; // Supongamos que 1 USD = 3800 COP
    setResult(`${pesos} Pesos Colombianos`);
  };

  const convertToEuros = () => {
    const euros = parseFloat(dollars) * 0.85; // Supongamos que 1 USD = 0.85 EUR
    setResult(`${euros} Euros`);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title} >CONVERTIDOR</Text>
    <Text>Ingrese el valor en dólares USD</Text>
    <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={dollars}
        onChangeText={setDollars}
      />
      <TouchableOpacity style={styles.button} onPress={convertToPesosMexicanos}>
        <Text style={styles.buttonText}>PESOS MEXICANOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={convertToPesosColombianos}>
        <Text style={styles.buttonText}>PESOS COLOMBIANOS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={convertToEuros}>
        <Text style={styles.buttonText}>EUROS</Text>
      </TouchableOpacity>
      <Text>Resultado: {result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
      width: '60%',
      backgroundColor: '#fff',
    },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})