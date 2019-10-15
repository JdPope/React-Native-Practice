import React from 'react'
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const myName = "Jesse"
  return <View>
  <Text style={styles.textStyle}>Getting Started With React Native!</Text>
  <Text style={styles.nameStyle}>my name is {myName}</Text>
  </View>
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize:45
  },
  nameStyle: {
    fontSize:20
  }
})

export default ComponentsScreen
