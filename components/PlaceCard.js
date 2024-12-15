import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const PlaceCard = ({ place }) => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Image */}
      <Image
        source={{ uri: place.images[0] }}
        style={styles.image}
      />
      {/* Content */}
      <View style={styles.content}>
        {/* Name */}
        <Text style={styles.name}>{place.name}</Text>
        {/* Address */}
        <Text style={styles.address}>{place.address}</Text>
        {/* Description */}
        <Text style={styles.description}>
          {place.description.length > 100 ? `${place.description.substring(0, 100)}...` : place.description}
        </Text>
        {/* Rating */}
        <Text style={styles.rating}>⭐ {place.rating}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#243642',
  },
  address: {
    fontSize: 14,
    color: '#387478',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    marginTop: 10,
    fontSize: 14,
    color: '#629584',
  },
});

export default PlaceCard;
