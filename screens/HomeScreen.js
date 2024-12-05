import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data); // Check the response
        const validItems = response.data.filter(item => item.id != null && item.title && item.body);
        setItems(validItems.slice(0, 10)); // Use only valid items
      })
      .catch((error) => console.error(error));
  }, []);

  const renderCard = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      {/* Random Unsplash Image */}
      <Image
        source={{
          uri: `https://source.unsplash.com/random/400x300?sig=${item.id}`,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        {/* Status Tag */}
        <Text style={styles.statusTag}>
          {item.id % 2 === 0 ? 'Active' : 'Inactive'}
        </Text>
        {/* Title */}
        <Text style={styles.title}>
          {item.title ? `🌟 ${item.title.toUpperCase()}` : 'No Title Available'}
        </Text>
        {/* Description */}
        <Text style={styles.description}>
          {item.body.length > 100 ? `${item.body.substring(0, 100)}...` : item.body}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Item List</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id ? item.id.toString() : String(item.index)}
        renderItem={renderCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  list: { paddingBottom: 10 },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: { width: '100%', height: 200 },
  content: { padding: 10 },
  statusTag: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4caf50',
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginBottom: 5,
  },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  description: { fontSize: 14, color: '#555' },
});

export default HomeScreen;
