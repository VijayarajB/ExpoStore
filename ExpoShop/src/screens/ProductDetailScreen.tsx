import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { getProductById } from '../api/productService';
import { RouteProp, useRoute } from '@react-navigation/native';
import ShimmerDetail from '../constants/shimmer';
type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
};

type RouteParams = {
  id: number;
};

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { id } = route.params;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading || !product) return <ShimmerDetail />;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.price}>₹ {product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    marginBottom: 8,
    color: '#555',
  },
  price: {
    fontSize: 16,
    color: '#FF6F00',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
  },
});
