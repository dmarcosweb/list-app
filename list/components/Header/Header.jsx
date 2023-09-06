import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import logoImg from "../../assets/banner.png";

export default function Header() {
  return (
    <>
      <Image style={styles.img} resizeMode="contain" source={logoImg} />
      <Text style={styles.subtitle}>small business big dreans </Text>
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 240,
  },
  subtitle: {
    fontSize: 25,
    color: '#024059',
    fontWeight: '400',
    textTransform: 'capitalize',
    marginTop: -15
  }
});
