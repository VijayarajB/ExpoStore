import React from 'react';
import { View } from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const Shimmer = () => (
  <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 16, justifyContent: 'space-between' }}>
    {[...Array(6)].map((_, i) => (
      <ShimmerPlaceholder
        key={i}
        LinearGradient={LinearGradient}
        style={{
          width: '47%',
          height: 180,
          borderRadius: 12,
          marginBottom: 16,
        }}
      />
    ))}
  </View>
);

export default Shimmer;
