import React, { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, TextInput, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [bmiMessage, setBmiMessage] = useState('');

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setBmiMessage('un peso inferior a lo normal');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setBmiMessage('un peso normal');
    } else if (bmiValue >= 25.0 && bmiValue <= 29.9) {
      setBmiMessage('sobrepeso');
    } else {
      setBmiMessage('obesidad');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bmiContainer}>
        <Text style={styles.titleContainer}>CALCULADORA IMC</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Altura (cm)"
          value={height}
          onChangeText={setHeight}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Peso (kg)"
          value={weight}
          onChangeText={setWeight}
        />
        <TouchableOpacity style={styles.button} onPress={calculateBMI}>
          <Text style={styles.buttonText}>Calcular IMC</Text>
        </TouchableOpacity>
        {bmi ? (
          <View>
            <Text>Su IMC es {bmi}</Text>
            <Text>tiene {bmiMessage}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titleContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  bmiContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  reactLogo: {
    width: 100,
    height: 100,
  },
});