import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'
import {} from 'react-native'
import tw from '~/lib/tailwind'

const Button = ({ onPress, children = 'Button', style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <LinearGradient
        colors={['#FF8599', '#FF3355']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={tw('p-3 rounded-lg text-center', { letterSpacing: 1.1 })}
      >
        <Text style={tw('uppercase text-white font-mont-extraBold')}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}

export default Button
