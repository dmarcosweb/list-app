import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

import checkImg from "../../assets/check.png";

export default function CardTodo({ todo }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text
        style={[
          styles.title,
          todo.isCompleted && { textDecorationLine: "line-through", color: '#bf0404' },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && (
        <Image style={styles.img} source={checkImg} resizeMode="center" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: 80,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    borderRadius: 15,
  },
  title: {
    fontSize: 25,
    color: "#555",
    fontWeight: "400",
  },
  img: {
    height: 40,
    width: 40,
  },
});
