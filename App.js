import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { Eye, Figma, Home, Product, Settings } from '~/screen'
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
        initialRouteName='Eye'
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
