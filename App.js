import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login';
import Home from './components/Home';
import PlayerList from './components/PlayerList';
import EditPage from './components/EditPage'; 
import CreateUser from './components/CreateUser';
// Importerer nødvendige komponenter og biblioteker til appen samt komponenterne, der bruges til navigationen i appen

//Opret en stak (stack) af skærme ved hjælp af React Navigation
const Stack = createNativeStackNavigator();
// Eksporterer funktionen App, der konfigurerer navigationen i appen
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerTitle: 'Log ind', }} />
        <Stack.Screen name="Home" component={Home} options={{headerTitle: 'Hjemmeskærm',
            headerBackTitle: 'Log ud', }}/>
  <Stack.Screen name="PlayerList" component={PlayerList} options={{headerTitle: 'Liste over spillere',
            headerBackTitle: 'Tilbage', }}/> 
               <Stack.Screen name="EditPage" component={EditPage} options={{ headerTitle: 'Rediger profil' }} />
               <Stack.Screen name="CreateUser" component={CreateUser} options={{ headerTitle: 'Opret bruger' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
