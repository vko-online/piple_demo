import { createStackNavigator } from 'react-navigation'

import Main from './src/Main'
import Demo1 from './src/Demo1'
import Demo2 from './src/Demo2'
import Demo3 from './src/Demo3'

export default createStackNavigator({
  Main: {
    screen: Main
  },
  Demo1: {
    screen: Demo1
  },
  Demo2: {
    screen: Demo2
  },
  Demo3: {
    screen: Demo3
  }
}, {
  initialRouteName: 'Main'
})
