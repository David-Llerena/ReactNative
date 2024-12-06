import { Image, StyleSheet, Platform, View,Text,FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';



let personas=[
  {nombre: "Thor", apellido: "Thillas", cedula: "0242342342"},
  {nombre: "Amber", apellido: "Flores", cedula: "0100245789"},
  {nombre: "Peter", apellido: "Parker", cedula: "0926324237"}
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>EJEMPLO LISTAS</Text>
      <FlatList
        style={styles.lista}
        data={personas}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item, index}) => {
          return (
            <View style={styles.itemPersona}>
              <Text style={styles.textoPrincipal}>
              {index}. {item.nombre} {item.apellido}
              </Text>
              <Text style={styles.textoSecundario}>
                {item.cedula}
              </Text>
            </View>
          );
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
  },
  textoPrincipal:{
    fontSize: 20,
  },
  textoSecundario:{
    fontStyle: 'italic',
    fontSize: 14,
  }
});
