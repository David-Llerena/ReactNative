import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

let productos=[
  {nombre: "Doritos",categoria: "Snacks", precioCompra: 0.40, precioVenta: 0.45, id:100},
  {nombre: "Coca Cola",categoria: "Bebidas", precioCompra: 0.50, precioVenta: 0.60, id:101},
  {nombre: "Papas",categoria: "Snacks", precioCompra: 0.30, precioVenta: 0.40, id:102},
  {nombre: "Agua",categoria: "Bebidas", precioCompra: 0.20, precioVenta: 0.25, id:103},
  {nombre: "Chicles",categoria: "Dulces", precioCompra: 0.10, precioVenta: 0.15, id:104},
]

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRODUCTOS</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.nombre}>
              {item.nombre} <Text style={styles.categoria}>({item.categoria})</Text>
            </Text>
            <Text style={styles.precioVenta}>USD {item.precioVenta.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
    paddingTop: 70,
  },
  itemContainer: {
    marginBottom: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  categoria: {
    fontSize: 18,
    color: '#888',
  },
  precioVenta: {
    fontSize: 18,
    color: '#007BFF',
    marginTop: 5,
  },
});