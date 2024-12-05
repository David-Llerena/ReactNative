import { Image, StyleSheet, Platform, View, Text, Button, Alert, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.container}> 
      <View style={styles.container2}>
      </View>
      <View style={styles.container3}>
        <View style={styles.container4}>
        </View>
        <View style={styles.container5}>
        <View style={styles.container6}>
          </View>
          <View style={styles.container7}>
              <Button
              title="BOTON 1">                 
              </Button>
              <Button
              title="BOTON 2">                 
              </Button>
              <Button
              title="BOTON 3">                 
              </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    flexDirection: 'column',
  },
  container2: {
    flex: 1,
    backgroundColor: 'blue',
    
  },
  container3: {
    flex: 3,
    backgroundColor: 'green',
    
  },
  container4: {
    flex: 3,
    backgroundColor: 'yellow',
    
  },
  container5: {
    flex: 3,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  container6: {
    flex: 1,
    backgroundColor: 'pink',
    
  },
  container7: {
    flex: 2,
    backgroundColor: 'purple',
    flexDirection: 'column',//eje principal el vertical
    justifyContent: 'center',//distribuye los elementos de manera uniforme
    alignItems: 'stretch',//alinea los elementos de manera uniforme
  },

});
