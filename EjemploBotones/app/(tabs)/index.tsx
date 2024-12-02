import { Image, StyleSheet, Platform, View, Text, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
    <><Text>Bienvenido David Llerena</Text>
    <StatusBar style="auto" /></>
    <Button       
    title="SALUDAR"
    onPress={() => {
      Alert.alert("MENSAJE", "SU SESION HA INICIADO")}}    
    />
    <Button
    title="DESPEDIRSE"
    onPress={() => {
      Alert.alert("MENSAJE", "SU SESION HA FINALIZADO")
    }}
    />

  </View>
  );
  }

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
