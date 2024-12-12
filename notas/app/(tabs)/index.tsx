import {StyleSheet,Text, View } from 'react-native';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {GradeForm} from '../screens/GradeFrom';
import {ListForm} from '../screens/ListGrades';


export default function HomeScreen() {
  const StackGrades = createNativeStackNavigator();
  return (
      <NavigationIndependentTree>
        <NavigationContainer>
          <StackGrades.Navigator>
            <StackGrades.Screen name="ListForm" component={ListForm} />
            <StackGrades.Screen name="GradeForm" component={GradeForm} />

          </StackGrades.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
  );
}
