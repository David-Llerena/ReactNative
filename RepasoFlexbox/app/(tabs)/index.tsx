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
            <Button
                title="X">                 
                </Button>
                <Button
                title="Y">                 
                </Button>
                <Button
                title="Z">                 
                </Button>
          </View>   
          <View style={styles.container3}>
            <View style={styles.container5}>
              <View style={styles.container7}>
                <Button
                  title="BOTON 1">                 
                  </Button>
                  <Button
                  title="BOTON 2">                 
                  </Button>
              </View>
              <View style={styles.container8}>
                  <Button
                  title="OPERACION 1">                 
                  </Button>
                  <Button
                  title="OPERACION 2">                 
                  </Button>
                  <Button
                  title="OPERACION 3">                 
                  </Button>
              </View>
            </View>
            <View style={styles.container6}>
            <Button
                  title="ACCION 1">                 
                  </Button>
                  <Button
                  title="ACCION 2">                 
                  </Button>
            </View>
          </View>
          <View style={styles.container4}>\
            <Button
            title="BOTON FINAL">                 
             </Button>
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
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container3: {
    flex: 6,
    backgroundColor: 'green',
    
  },
  container4: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  container5: {
    flex: 4,
    backgroundColor: 'pink',
    flexDirection: 'row',//eje principal el horizontal
  },
  container6: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    
  },
  container7:{
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
  container8:{
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }






});
