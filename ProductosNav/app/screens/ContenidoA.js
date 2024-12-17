
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ContenidoA() {
  return (
    <View style={styles.container}>
      <Text>Contenido A</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});