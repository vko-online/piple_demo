import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'

export const Hint = ({ text }) => (
  <Text style={styles.hint}>
    {text}
  </Text>
)

const styles = StyleSheet.create({
  hint: {
    color: '#555',
    fontSize: 14,
    padding: 10
  }
})
