import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import CreateUser from './CreateUser';
//importering af komponenenter

//login funktion
const Login = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const handleCreateUser = () => {
    navigation.navigate('CreateUser'); // Navigation til CreateUser 
  };

  return (
    <View style={styles.container}>
      {/* inputfelter der ikke kan ændres */}
      <TextInput
        style={styles.input}
        value="Brugernavn: Tennisfanatikeren"
        editable={false} 
      />
      <TextInput
        style={styles.input}
        value="Password: **********"
        editable={false} 
      />
      {/* Log ind knap */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log ind</Text>
      </TouchableOpacity>
    {/* Tekst nedenfor Log ind-knappen */}
      <Text style={[styles.createText, { marginTop: 10 }]} onPress={handleCreateUser}>
        Har du ikke en bruger? Tryk her for at oprette en
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF', 
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createText: {
    color: '#007AFF', 
    fontSize: 14,
  },
});

export default Login;
