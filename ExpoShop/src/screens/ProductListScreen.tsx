import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, LayoutAnimation, Platform, UIManager, SafeAreaView } from 'react-native';
import { getAllProducts } from '../api/productService';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import Shimmer from '../constants/ProductListShimmer';
import colors from '../constants/colors';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
};


export default function ProductListScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

useEffect(() => {
  (async () => {
    try {
      const data = await getAllProducts();
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setProducts(data);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error loading products',
      });
    } finally {
      setLoading(false);
    }
  })();
}, []);

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const onRefresh = async () => {
  setRefreshing(true);
  try {
    const data = await getAllProducts();
    setProducts(data);
    console.log("ProductListData:",data)
    console.log("ProductListData2:", JSON.stringify(data[0], null, 2));

  } catch (err) {
    Toast.show({
      type: 'error',
      text1: 'Refresh failed',
    });
  }
  setRefreshing(false);
};

  if (loading) return <Shimmer />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()}
  numColumns={2}
  columnWrapperStyle={styles.row}
  contentContainerStyle={styles.container}
  showsVerticalScrollIndicator={false}
  refreshing={refreshing}
  onRefresh={onRefresh}
  renderItem={({ item }) => (
    <ProductCard
  title={item.title}
  image={item.image}
  price={item.price}
  rating={item.rating}
  category={item.category}
  onPress={() => navigation.navigate('ProductDetail', {
    id: item.id,
    title: item.title,
  })}
/>

  )}
/>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
 container: {
    paddingHorizontal: 8,
    paddingTop: 8,
    backgroundColor:colors.border,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

