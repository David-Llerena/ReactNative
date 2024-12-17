import {StyleSheet,Text, View } from 'react-native';
import { Icon } from '@rneui/base';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {GradeForm} from '../screens/GradeFrom';
import {ListForm} from '../screens/ListGrades';
import {EjemploTabs} from '../screens/EjemploTabs';
import {FinalizarSesion} from '../screens/FinalizarSesion';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import ContenidoA from '../screens/ContenidoA';
import ContenidoB from '../screens/ContenidoB';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const tab= createBottomTabNavigator();

const TabNav=()=>{
  return(
    <tab.Navigator>
      <tab.Screen 
        name="ContenidoA" 
        component={ContenidoA}
        options={{
          headerShown: false,
          tabBarLabel: 'Configuracion',
        tabBarIcon: ({size,color}) => {
            return <Icon name="tool" size={size} color={color} type='ant-design' />;
          }
        }}
      />
      <tab.Screen 
        name="ContenidoB" 
        component={ContenidoB}
        options={{
          headerShown: false,
          tabBarLabel: 'Acerca de',
          tabBarIcon: ({size,color}) => {
            return <Icon name="mail" size={size} color={color} type='ant-design' />;
          }
        }}
      />
    </tab.Navigator>
  )
};

const StackGrades = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="ListForm" 
      component={ListForm} 
      />
      <Stack.Screen 
      name="GradeForm" 
      component={GradeForm} 
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackGrades"
        component={StackGrades}
        options={{
          title: "ListForm",
        }}
      />
      <Drawer.Screen  
        name="EjemploTabs"
        component={TabNav}
        options={{
          title: "Ejemplo Tabs",
        }}
      />
      <Drawer.Screen
        name="FinalizarSesion"
        component={FinalizarSesion}
        options={{
          title: "Finalizar Sesión",
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <DrawerNav />
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}


// export default function HomeScreen() {
//   const StackGrades = createNativeStackNavigator();
//   return (
//       <NavigationIndependentTree>
//         <NavigationContainer>
//           <DrawerNav />
//         </NavigationContainer>
//         {/* <NavigationContainer>
//           <StackGrades.Navigator>
//             <StackGrades.Screen name="ListForm" component={ListForm} />
//             <StackGrades.Screen name="GradeForm" component={GradeForm} />
//           </StackGrades.Navigator>
//         </NavigationContainer> */}
//       </NavigationIndependentTree>
//   );
// }
