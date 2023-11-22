import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Overlay({opacity}) {
  const styles = StyleSheet.create({
    conatiner: {
      ...StyleSheet.absoluteFill,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: opacity ? `rgba(0,0,0,${opacity})` : 'rgba(0,0,0,.3)',
      overflow: 'hidden',
      borderRadius: 100,
    },
  });
  return <View style={styles.conatiner} />;
}
