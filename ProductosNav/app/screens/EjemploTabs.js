import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const EjemploTabs = () => {
  return (
    <View style={styles.container}>
      <Text>Estoy en ejemplo tabs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
