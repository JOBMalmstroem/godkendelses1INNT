import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
//importering af komponenenter


const CreateUser = ({ navigation }) => {
    //Definerer state variabler til at oprette brugerinformation
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Funktion til at håndtere oprettelse af ny bruger
  const handleCreateUser = () => {
      // Oprettelse af ny bruger ved at oprette et objekt med brugeroplysninger
    const newUser = {
      name,
      username,
      email,
      password,
    };
    console.log('New User Data:', newUser);
  };

  return (
    <View style={styles.container}>
      <Text>Her kan du oprette en bruger</Text>
      <TextInput
        style={styles.input}
        placeholder="Navn"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Brugernavn"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
        <Text style={styles.buttonText}>Opret bruger</Text>
      </TouchableOpacity>
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
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007AFF', 
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateUser;
