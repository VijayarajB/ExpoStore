import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

type Props = {
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  category: string;
  onPress: () => void;
};

export default function ProductCard({ title, image, price, category, rating, onPress }: Props) {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: image }} style={styles.image} />
      <TouchableOpacity style={styles.favIcon} onPress={toggleFavourite}>
        <Ionicons
          name={isFavourite ? 'heart' : 'heart-outline'}
          size={22}
          color={isFavourite ? colors.primary : colors.primary}
        />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.category}>{category.toUpperCase()}</Text>
      <Text style={styles.rating}>⭐ {rating.rate} ({rating.count})</Text>
      <Text style={styles.price}>₹ {price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 10,
    width: '48%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  image: {
    height: 160,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 8,
  },
  favIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 2,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
    elevation: 3,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.accent,
  },
  category: {
    fontSize: 11,
    color: colors.secondary,
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: colors.darkgrey,
    marginBottom: 4,
  },
});
