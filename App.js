import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View } from '~/components'
import { Eye, Figma, Home, Product, Settings } from '~/screen'

const tabScreens = [
  { name: 'Home', Component: Home, icon: 'home' },
  { name: 'Product', Component: Product, icon: 'droplet' },
  { name: 'Settings', Component: Settings, icon: 'settings' },
  { name: 'Eye', Component: Eye, icon: 'eye' },
  { name: 'Figma', Component: Figma, icon: 'figma' },
]

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 20,
            backgroundColor: '#F9FAFB',
            marginHorizontal: 20,
            height: 60,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E5E7EB',
          },
        }}
      >
        {tabScreens.map(({ name, Component, icon }) => (
          <Tab.Screen
            key={name}
            name={name}
            component={Component}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Feather name={icon} size={24} color={focused ? '#FF3355' : '#6B7280'} />
                  </View>
                )
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App
