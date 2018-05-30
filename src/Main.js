import React from 'react'
import {
  View,
  StyleSheet,
  Button
} from 'react-native'

export default class MainScreen extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Button title='Demo1' onPress={() => this.props.navigation.navigate('Demo1')} />
        <Button title='Demo2' onPress={() => this.props.navigation.navigate('Demo2')} />
        <Button title='Demo3' onPress={() => this.props.navigation.navigate('Demo3')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
