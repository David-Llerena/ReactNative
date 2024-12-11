import {StyleSheet, View,Text, Alert } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {Button, Icon, Input} from '@rneui/base'


export default function HomeScreen() {
  const [name, setName] = useState<string>('');
  return (
    <View style={styles.Container}>
      <Text>RNE</Text>
      <Input 
        value={name}
        onChangeText={setName}
        placeholder='Ingrese su nombre'
        label="Nombre"
       />
       <Text>{name}</Text>
      <Button
          title='OK'
          icon={{
            name: 'dribbble',
            type: 'zocial',
            size: 15,
            color: 'white',
          }}
          onPress={() => {Alert.alert('INFO','Su nombre es '+name);}}
        />
        <Button
          title='CANCEL'
          icon={<Icon 
            name="reddit" 
            type= 'zocial'
            color="white" />
          }
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
