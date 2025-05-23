import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { getProductById } from '../api/productService';
import { RouteProp, useRoute } from '@react-navigation/native';
import ShimmerDetail from '../constants/shimmer';
import colors from '../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Product = {
    id: number;
    title: string;
    image: string;
    price: number;
    category: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
};

type RouteParams = {
    id: number;
};

export default function ProductDetailScreen() {
    const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
    const { id } = route.params;

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [isFavourite, setIsFavourite] = useState(false);

    const toggleFavourite = () => {
        setIsFavourite(!isFavourite);
    };

    useEffect(() => {
        (async () => {
            const data = await getProductById(id);
            setProduct(data);
            setLoading(false);
        })();
    }, [id]);

    if (loading || !product) return <ShimmerDetail />;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image source={{ uri: product.image }} style={styles.image} />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.category}>Category: {product.category}</Text>
                <Text style={styles.price}>₹ {product.price.toFixed(2)}</Text>
                <Text style={styles.rating}>⭐⭐⭐⭐ {product.rating.rate} ({product.rating.count} reviews)</Text>
                <Text style={styles.description}>{product.description}</Text>
                <TouchableOpacity style={styles.favIcon} onPress={toggleFavourite}>
                    <Ionicons
                        name={isFavourite ? 'heart' : 'heart-outline'}
                        size={22}
                        color={isFavourite ? colors.primary : colors.primary}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: colors.white,
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
        marginBottom: 6,
        color: '#555',
    },
    price: {
        fontSize: 16,
        color: '#FF6F00',
        fontWeight: 'bold',
        marginBottom: 6,
    },
    rating: {
        fontSize: 14,
        color: colors.black,
        marginBottom: 12,
    },
    description: {
        fontSize: 14,
        lineHeight: 22,
    },
    favIcon: {
        position: 'absolute',
        top: 20,
        right: 30,
        zIndex: 2,
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 4,
        elevation: 3,
    },
});
