import { Feather } from '@expo/vector-icons'
import { View } from 'react-native'
import { Home, Option } from '~/screen'
import DrawTab from './DrawTab'
import tw from '~/lib/tailwind'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

const BottomTab = createBottomTabNavigator()

const tabScreens = [
  { name: 'Product', Component: DrawTab, icon: 'settings' },
  { name: 'Home', Component: Home, icon: 'home' },
  { name: 'Option', Component: Option, icon: 'list' },
]

const MainTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabScreens.map(({ name, Component, icon }, index) => (
        <BottomTab.Screen
          key={name}
          name={name}
          component={Component}
          options={{
            tabBarIcon: ({ focused }) => {
              if (index === ~~(tabScreens.length / 2)) {
                return (
                  <LinearGradient
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    colors={focused ? ['#FF3355', '#FF8599'] : ['#FFC2CC', '#FFC2CC']}
                    style={tw('absolute -top-8 h-16 w-16 items-center justify-center rounded-full')}
                  >
                    <Feather name={icon} size={30} color='#fff' />
                  </LinearGradient>
                )
              }
              return <Feather name={icon} size={24} color={focused ? '#FF3355' : '#6B7280'} />
            },
          }}
        />
      ))}
    </BottomTab.Navigator>
  )
}

export default MainTab
