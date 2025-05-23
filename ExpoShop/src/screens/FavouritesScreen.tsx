import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ProductCard from '../components/ProductCard';
import { Header } from 'react-native/Libraries/NewAppScreen';

const dummyFavouriteProducts = [
  {
    id: '1',
    title: 'Apple iPhone 15 Pro',
    image: 'https://via.placeholder.com/150',
    price: 1299.99,
    category: 'Electronics',
    rating: {
      rate: 4.9,
      count: 1340,
    },
  },
  {
    id: '2',
    title: 'Adidas Running Shoes',
    image: 'https://via.placeholder.com/150',
    price: 4499.99,
    category: 'Footwear',
    rating: {
      rate: 4.6,
      count: 230,
    },
  },
  {
    id: '3',
    title: 'Sony Wireless Headphones',
    image: 'https://via.placeholder.com/150',
    price: 9999.99,
    category: 'Accessories',
    rating: {
      rate: 4.7,
      count: 564,
    },
  },
];

export default function FavouritesScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyFavouriteProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            image={item.image}
            price={item.price}
            category={item.category}
            rating={item.rating}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                product: item,
              })
            }
          />
        )}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
