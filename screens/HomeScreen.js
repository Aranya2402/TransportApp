import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import PlaceCard from '../components/PlaceCard'; // Import the card component

const HomeScreen = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch places data from backend
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/places') // Replace with your backend URL
      .then((response) => {
        setPlaces(response.data); // Save places data in state
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load places.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading places...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore Places</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item._id} // Use unique ID from backend
        renderItem={({ item }) => <PlaceCard place={item} />} // Render themed card
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  list: { paddingBottom: 10 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', fontSize: 18 },
});

export default HomeScreen;
