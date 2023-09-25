import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'; 
import { PLAYERS } from '../const'; 
//importerer nødvendige komponenter samt spillerliste array
const PlayerList = () => {
  // Funktion til at håndtere valg af en spiller 
  const handleSelectPlayer = (player) => {
    // Her kan implementeres logik
    console.log('Valgte spiller:', player.name);
  };
// Render spillerlisten ved hjælp af FlatList
  return (
    <View style={styles.container}>
      <FlatList
        data={PLAYERS}
        keyExtractor={(player) => player.name}
        renderItem={({ item }) => (
          <View style={styles.playerItem}>
            <Text>{item.name}</Text>
            <Text>Alder: {item.age}</Text>
            <Text>Lokation: {item.location}</Text>
            {/* Laver vælg Spiller Knap */}
            <TouchableOpacity style={styles.selectButton} onPress={() => handleSelectPlayer(item)}>
              <Text style={styles.selectButtonText}>Opret forbindelse</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerItem: {
    marginVertical: 10, 
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectButton: {
    backgroundColor: '#007AFF', 
    padding: 10,
    borderRadius: 5,
    marginTop: 10, 
  },
  selectButtonText: {
    color: 'white', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PlayerList;
