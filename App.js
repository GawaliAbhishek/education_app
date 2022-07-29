
import Home from './src/Screens/Home';
import Contact from './src/Screens/Contact';
import About from './src/Screens/About';
import Course from './src/Screens/Course';
import User from './src/Screens/User';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false,}} />

        <Stack.Screen name='Course' component={Course} options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitle: 'Courses',
          headerTitleAlign: 'center',
          
        }} />
        <Stack.Screen name='Profile' component={User} options={{
          headerTitleStyle: {
            fontSize: 20,

          },
          headerTitle: 'Devloper Profile',
          headerTitleAlign: 'center'

        }} />
        <Stack.Screen name='Contact' component={Contact} options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitle: 'Contact Us',
          headerTitleAlign: 'center'

        }} />
        <Stack.Screen name='About' component={About} options={{
          headerTitleStyle: {
            fontSize: 20
          },
          headerTitle: 'About',
          headerTitleAlign: 'center'

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

