import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const FinalizarSesion = () => {
  return (
    <View style={styles.container}>
      <Text>Finalizar sesión</Text>
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

