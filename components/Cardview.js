import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const Cardview = ({ imageSource, title, description }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: imageSource }}
        style={styles.imgStyle}
      />
      <Text style={styles.h1}>{title}</Text>
      <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    backgroundColor: "#1113"
  },
  imgStyle: {
    height: 40,
    width: 40,
  },
  h1: {
    fontSize: 5,
  },
});

export default Cardview;