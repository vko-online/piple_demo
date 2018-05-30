import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native'

import { Hint } from './Common'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

class Circle extends Component {
  state = {
    expanded: false,
    animation: new Animated.Value(0)
  }

  handlePress = () => {
    this.setState({ expanded: !this.state.expanded }, () => {
      Animated.timing(this.state.animation, {
        toValue: this.state.expanded ? 1 : 0,
        duration: 1000,
        easing: Easing.elastic(1)
      }).start()
    })
  }

  render () {
    const { minSize, maxSize } = this.props

    const size = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: [minSize, maxSize]
    })

    const circleStyle = { width: size, height: size, borderRadius: size }

    return (
      <AnimatedTouchable onPress={this.handlePress} style={[styles.circle, circleStyle]} />
    )
  }
}

export default class Demo2Screen extends Component {
  state = {
    minSize: '50',
    maxSize: '300'
  }

  handleMinValueChange = minSize => this.setState({ minSize })
  handleMaxValueChange = maxSize => this.setState({ maxSize })

  render () {
    return (
      <View style={styles.container}>
        <Circle minSize={Number(this.state.minSize)} maxSize={Number(this.state.maxSize)} />
        <View style={styles.inputRow}>
          <TextInput
            onChangeText={this.handleMinValueChange}
            style={styles.input}
            keyboardType='numeric'
            value={this.state.minSize}
          />
          <TextInput
            onChangeText={this.handleMaxValueChange}
            style={styles.input}
            keyboardType='numeric'
            value={this.state.maxSize}
          />
        </View>
        <Hint text='Write a react native component that displays a circle that switches between two sizes when clicked. The 2 sizes are specified in the parameters and transition must be continuous.' />
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
    width: 100,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#aaa',
    borderRadius: 10
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  circle: {
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
