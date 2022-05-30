import { createStackNavigator } from '@react-navigation/stack'
import { Home, Loan, Statistic } from '~/screen'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

const stackScreens = [
  { name: 'Loan', Component: Loan },
  { name: 'Statistic', Component: Statistic },
]

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {stackScreens.map(({ name, Component }, index) => (
        <Stack.Screen key={index} name={name} component={Component} />
      ))}
    </Stack.Navigator>
  )
}

export default HomeStack
