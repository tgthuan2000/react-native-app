import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Eye, Figma, Home, Product, Settings } from '~/screen'
import { View } from 'react-native'
import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light_Italic,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black_Italic,
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'
import tw from '~/lib/tailwind'
import { LinearGradient } from 'expo-linear-gradient'

const tabScreens = [
  { name: 'Home', Component: Home, icon: 'home' },
  { name: 'Product', Component: Product, icon: 'droplet' },
  { name: 'Settings', Component: Settings, icon: 'settings' },
  { name: 'Eye', Component: Eye, icon: 'eye' },
  { name: 'Figma', Component: Figma, icon: 'figma' },
]

const Tab = createBottomTabNavigator()

const App = () => {
  const [loadedFonts] = useFonts({
    Montserrat_100Thin,
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light_Italic,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black_Italic,
  })

  if (!loadedFonts) return <AppLoading />

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Settings'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#E5E7EB',
            height: 80,
            paddingBottom: 20,
            borderTopWidth: 0,
          },
        }}
      >
        {tabScreens.map(({ name, Component, icon }, index) => (
          <Tab.Screen
            key={name}
            name={name}
            component={Component}
            options={{
              tabBarIcon: ({ focused }) => {
                if (index === ~~(tabScreens.length / 2)) {
                  return (
                    <View style={tw('bg-gray-200 p-3 rounded-full -mt-10')}>
                      <LinearGradient
                        colors={focused ? ['#FF8599', '#FF5C77'] : ['#FF5C77', '#FF8599']}
                        style={tw('p-5 rounded-full')}
                      >
                        <Feather name={icon} size={30} color='#FFF' />
                      </LinearGradient>
                    </View>
                  )
                }

                return <Feather name={icon} size={24} color={focused ? '#FF3355' : '#6B7280'} />
              },
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
