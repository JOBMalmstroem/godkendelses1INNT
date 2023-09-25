import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//importering af komponenenter
const Home = ({ navigation }) => {
  const handleFindPlayers = () => {
    navigation.navigate('PlayerList'); // Navigation til listen over spillere
  };
  const handleEditPage = () => {
    navigation.navigate('EditPage'); // Navigation til redigerprpfil siden
  };

//viser velkomstbesked og knapper der fører til de to sider
  return (
    <View style={styles.container}>
      <Text>Velkommen til din profilside</Text>
      <TouchableOpacity style={styles.button} onPress={handleFindPlayers}>
        <Text style={styles.buttonText}>Find andre spillere</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleEditPage}>
        <Text style={styles.buttonText}>Rediger profil</Text>
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

export default Home;
