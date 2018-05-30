import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput
} from 'react-native'

import { Hint } from './Common'

const screenWidth = Dimensions.get('screen').width

const Circle = ({ text }) => (
  <View style={styles.circle}>
    <Text style={styles.circleText}>{text}</Text>
  </View>
)

export default class Demo1Screen extends React.Component {
  state = {
    text: ''
  }

  handleChange = text => this.setState({ text })

  render () {
    return (
      <View style={styles.container}>
        <Circle text={this.state.text} />
        <TextInput
          onChangeText={this.handleChange}
          style={styles.input}
          placeholder='Enter text'
        />
        <Hint text='Write a react native component that takes some text in the parameters (up to 140 char) and displays it in a circle. The text must be centered in the circle. The circle must be centered with a diameter of half the width of the screen.' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  input: {
    paddingHorizontal: 10,
    height: 50,
    width: screenWidth / 1.5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#aaa',
    borderRadius: 10
  },

  circle: {
    width: screenWidth / 2,
    height: screenWidth / 2,
    borderRadius: screenWidth / 4,
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circleText: {
    textAlign: 'center'
  }
})
