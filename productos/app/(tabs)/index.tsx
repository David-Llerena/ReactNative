import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const initialProductos = [
  { id: 100, nombre: 'Doritos', categoria: 'Snacks', precioCompra: 0.40, precioVenta: 0.45 },
  { id: 101, nombre: 'Coca Cola', categoria: 'Bebidas', precioCompra: 0.50, precioVenta: 0.60 },
  { id: 102, nombre: 'Papas', categoria: 'Snacks', precioCompra: 0.30, precioVenta: 0.40 },
  { id: 103, nombre: 'Agua', categoria: 'Bebidas', precioCompra: 0.20, precioVenta: 0.25 },
  { id: 104, nombre: 'Chicles', categoria: 'Dulces', precioCompra: 0.10, precioVenta: 0.15 },
];

export default function HomeScreen() {
  const [productos, setProductos] = useState(initialProductos);
  const [txtCodigo, setTxtCodigo] = useState('');
  const [txtNombre, setTxtNombre] = useState('');
  const [txtCategoria, setTxtCategoria] = useState('');
  const [txtPrecioCompra, setTxtPrecioCompra] = useState('');
  const [txtPrecioVenta, setTxtPrecioVenta] = useState('');
  const [numProductos, setNumProductos] = useState(initialProductos.length);

  useEffect(() => {
    setNumProductos(productos.length);
  }, [productos]);

  const handleNuevoProducto = () => {
    // Validar que todos los campos estén llenos
    if (!txtCodigo || !txtNombre || !txtCategoria || !txtPrecioCompra || !txtPrecioVenta) {
      alert('Por favor, complete todos los campos');
      return;
    }

    // Crear nuevo producto
    const nuevoProducto = {
      id: parseInt(txtCodigo),
      nombre: txtNombre,
      categoria: txtCategoria,
      precioCompra: parseFloat(txtPrecioCompra),
      precioVenta: parseFloat(txtPrecioVenta)
    };

    // Verificar si el ID ya existe
    const productoExistente = productos.find(p => p.id === nuevoProducto.id);
    if (productoExistente) {
      alert('Ya existe un producto con este código');
      return;
    }

    // Agregar nuevo producto
    setProductos([...productos, nuevoProducto]);

    limpiarCampos();
  };

  const limpiarCampos = () => {
    setTxtCodigo('');
    setTxtNombre('');
    setTxtCategoria('');
    setTxtPrecioCompra('');
    setTxtPrecioVenta('');
  };

  const editarProducto = (producto) => {
    setTxtCodigo(producto.id.toString());
    setTxtNombre(producto.nombre);
    setTxtCategoria(producto.categoria);
    setTxtPrecioCompra(producto.precioCompra.toString());
    setTxtPrecioVenta(producto.precioVenta.toString());
  };

  const guardarProducto = () => {
    const productoActualizado = {
      id: parseInt(txtCodigo),
      nombre: txtNombre,
      categoria: txtCategoria,
      precioCompra: parseFloat(txtPrecioCompra),
      precioVenta: parseFloat(txtPrecioVenta),
    };
    const productosActualizados = productos.map((producto) =>
      producto.id === productoActualizado.id ? productoActualizado : producto
    );
    setProductos(productosActualizados);
    limpiarCampos();
  };

  const eliminarProducto = (id) => {
    const productosActualizados = productos.filter((producto) => producto.id !== id);
    setProductos(productosActualizados);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PRODUCTOS</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setTxtCodigo}
          value={txtCodigo}
          placeholder="Código"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTxtNombre}
          value={txtNombre}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTxtCategoria}
          value={txtCategoria}
          placeholder="Categoría"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTxtPrecioCompra}
          value={txtPrecioCompra}
          placeholder="Precio de Compra"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setTxtPrecioVenta}
          value={txtPrecioVenta}
          placeholder="Precio de Venta"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button 
            title="NUEVO" 
            onPress={handleNuevoProducto} 
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="GUARDAR" 
            onPress={guardarProducto} 
          />
        </View>
      </View>
      <View>
        <Text style={styles.titleSec}>LISTA DE PRODUCTOS: {numProductos}</Text>
      </View>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemIndice}>
              <Text>{item.id}</Text>
            </View>
            <View style={styles.itemContenido}>
              <Text style={styles.nombreText}>{item.nombre}</Text>
              <Text style={styles.categoriaText}>({item.categoria})</Text>
            </View>
            <View style={styles.itemPrecio}>
              <Text style={styles.precioText}>${item.precioVenta.toFixed(2)}</Text>
            </View>
            <View style={styles.itemBotones}>
              <Button
                title="E"
                color="green"
                onPress={() => editarProducto(item)}
              />
              <Button
                title="X"
                color="red"
                onPress={() => eliminarProducto(item.id)}
              />
            </View>
          </View>
        )}
      />
      <View style={styles.areaPie}>
        <Text style={styles.titleSec}>Autor: David Llerena</Text>
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 30,
    marginHorizontal: 100,
  },
  titleSec: {
    fontSize: 14,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  inputContainer: {
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemIndice: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContenido: {
    flex: 4,
    paddingHorizontal: 10,
  },
  nombreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriaText: {
    fontSize: 14,
    color: '#888',
  },
  itemBotones: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  itemPrecio: {
    flex: 2,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  precioText: {
    fontSize: 16,
    color: '#007BFF',
  },
  areaPie: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end', }
});