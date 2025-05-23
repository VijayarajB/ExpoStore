import React from 'react';
import { View } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerDetail = () => (
  <View style={{ padding: 16 }}>
    <ShimmerPlaceholder
      shimmerStyle={{ borderRadius: 12 }}
      LinearGradient={LinearGradient}
      style={{ width: '100%', height: 300, borderRadius: 12, marginBottom: 20 }}
    />
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={{ width: '80%', height: 20, borderRadius: 8, marginBottom: 12 }}
    />
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={{ width: '60%', height: 20, borderRadius: 8, marginBottom: 12 }}
    />
    <ShimmerPlaceholder
      LinearGradient={LinearGradient}
      style={{ width: '90%', height: 80, borderRadius: 8 }}
    />
  </View>
);

export default ShimmerDetail;
