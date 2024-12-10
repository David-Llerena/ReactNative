import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';

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
  const [modalVisible, setModalVisible] = useState(false);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

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

  const confirmarEliminarProducto = (producto) => {
    setProductoAEliminar(producto);
    setModalVisible(true);
  };

  const eliminarProducto = () => {
    const productosActualizados = productos.filter((producto) => producto.id !== productoAEliminar.id);
    setProductos(productosActualizados);
    setModalVisible(false);
    setProductoAEliminar(null);
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
            color="#007BFF" 
          />
        </View>
        <View style={styles.button}>
          <Button 
            title="GUARDAR" 
            onPress={guardarProducto} 
            color="#28a745" 
          />
        </View>
      </View>
      <View>
        <Text style={styles.titleSec}>LISTA DE PRODUCTOS: {numProductos}</Text>
      </View>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => editarProducto(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.nombre}>
                {item.nombre} <Text style={styles.categoria}>({item.categoria})</Text>
              </Text>
              <Text style={styles.precioVenta}>USD {item.precioVenta.toFixed(2)}</Text>
              <View style={styles.itemBotones}>
                <Button
                  title="X"
                  color="red"
                  onPress={() => confirmarEliminarProducto(item)}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Está seguro que quiere eliminar?</Text>
            <View style={styles.modalButtonContainer}>
              <Button
                title="Cancelar"
                onPress={() => setModalVisible(false)}
                color="#888"
              />
              <Button
                title="Aceptar"
                onPress={eliminarProducto}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.areaPie}>
        <Text>Autor: David Llerena</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  titleSec: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
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
  itemBotones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  areaPie: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});