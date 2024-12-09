import { Image, StyleSheet, Platform, View,Text,FlatList, TextInput,Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


let personas=[
  {nombre: "Thor", apellido: "Thillas", cedula: "0242342342"},
  {nombre: "Amber", apellido: "Flores", cedula: "0100245789"},
  {nombre: "Peter", apellido: "Parker", cedula: "0926324237"}
];

type ItemPersonaProps = {
  indice: number;
  nombre: string;
  apellido: string;
  cedula: string;
};


//indica si se esta creando una nueva persona o modificando una existente
let esNuevo=true
let indiceSeleccionado=-1;

export default function HomeScreen() {
  const[txtCedula, setTxtCedula] = useState('');
  const[txtNombre, setTxtNombre] = useState('');
  const[txtApellido, setTxtApellido] = useState('');
  const[numElementos,setNumElementos]=useState(personas.length);

  let agregarPersona = () => {
    if(esNuevo){  
      let persona = {nombre: txtNombre, apellido: txtApellido, cedula: txtCedula};
      personas.push(persona);
    }else{
      personas[indiceSeleccionado].nombre=txtNombre;
      personas[indiceSeleccionado].apellido=txtApellido;
    }
    limpiar();
    setNumElementos(personas.length);
  }
  let limpiar= () => {
    setTxtCedula('');
    setTxtNombre('');
    setTxtApellido('');
    esNuevo=true;
  };

  let ItemPersona = (props: ItemPersonaProps) => {
    function setTxtCedula(cedula: string) {
      throw new Error('Function not implemented.');
    }
  
    return (
      <View style={styles.itemPersona}>
        <View style={styles.itemIndice}> 
          <Text>
          {props.indice}
          </Text>
        </View>
        <View style={styles.itemContenido}>
          <Text style={styles.textoPrincipal}>
          {props.nombre} {props.apellido}
          </Text>
          <Text style={styles.textoSecundario}>
            {props.cedula}
          </Text>
        </View>
        <View style={styles.itemBotones}>
          <Button
            title="E"
            color="green"
              onPress={() => {
                // alert('Editar');
                esNuevo=false;
                setTxtCedula(props.cedula);
                setTxtNombre(props.nombre);
                setTxtApellido(props.apellido);
                esNuevo=false;
                indiceSeleccionado=props.indice;
              }}
          />
          <Button
            title="X"
            color="red"
            onPress={() => {
              indiceSeleccionado=props.indice;
              personas.splice(props.indice,1);
              console.log("ARREGLO PERSONAS: ",personas);
              setNumElementos(personas.length);
            }}
          />
        </View>
      </View>
    );
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.areaCabecera}>
        <Text>PERSONAS</Text>
        <TextInput
          style={styles.txt}
          onChangeText={text => setTxtCedula(text)}
          value={txtCedula}
          placeholder="Cedula"
          keyboardType='numeric'
          editable={esNuevo}
        />
        <TextInput
          style={styles.txt}
          onChangeText={text => setTxtNombre(text)}
          value={txtNombre}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.txt}
          onChangeText={text => setTxtApellido(text)}
          value={txtApellido}
          placeholder="Apellido"
        />
        <View style={styles.areaBotones}>
          <Button
            title="GUARDAR"
            onPress={() => {
              agregarPersona();
            }}
          />
          <Button
            title="NUEVO"
            onPress={() => {
                limpiar();
            }}
          />
        </View>
        <Text>Numero de elementos: {numElementos}</Text>
      </View> 
      <View style={styles.areaContenido}>
        <FlatList
          style={styles.lista}
          data={personas}
          keyExtractor={(item,index) => index.toString()}
          renderItem={({ item, index}) => {
            return (
              <ItemPersona
                indice={index}
                nombre={item.nombre}
                apellido={item.apellido}
                cedula={item.cedula}
              />
            );
          }}
        />
      </View>
      <View style={styles.areaPie}>
        <Text>Autor: David Llerena</Text>
      </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: 'lightblue',
    flexDirection: 'column',
    paddingTop: 50,
    paddingHorizontal: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  lista:{
    // backgroundColor: 'lightpink',
  },
  itemPersona:{
    backgroundColor: 'lemonchiffon',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
  },
  textoPrincipal:{
    fontSize: 20,
  },
  textoSecundario:{
    fontStyle: 'italic',
    fontSize: 14,
  },
  areaCabecera: {
    flex: 4,
    // backgroundColor: 'chartreuse',
    justifyContent: 'center',
  },
  areaContenido: {
    flex: 6,
    // backgroundColor: 'coral',
  },
  areaPie: {
    flex: 1,
    // backgroundColor: 'cornflowerblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }, 
  itemIndice: {
    // backgroundColor: 'darkgray',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  itemContenido: {
    paddingLeft: 10,
    // backgroundColor: 'darkorange',
    flex:6,
  }, 
  itemBotones: {
    flexDirection: 'row',

    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  txt: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingTop: 3, 
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  areaBotones: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
