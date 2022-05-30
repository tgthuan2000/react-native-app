import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Eye, List, Product, Settings } from '~/screen'
import 'react-native-gesture-handler'
import { Text, View } from 'react-native'
import tw from '~/lib/tailwind'
import { LinearGradient } from 'expo-linear-gradient'

const TopTab = createMaterialTopTabNavigator()

const drawTabScreens = [
  { name: '1', Component: Settings },
  { name: '2', Component: Eye },
  { name: '3', Component: List },
  { name: '4', Component: Product },
]

const DrawTab = () => {
  return (
    <View>
      <LinearGradient colors={['#FF3355', '#FF8599']} style={tw('p-5')}>
        <Text style={tw('font-mont-semiBold text-white text-lg')}>Themes store</Text>
      </LinearGradient>
      <TopTab.Navigator>
        {drawTabScreens.map(({ name, Component }, index) => (
          <TopTab.Screen key={index} name={name} component={Component} />
        ))}
      </TopTab.Navigator>
    </View>
  )
}

export default DrawTab
