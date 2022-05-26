import { View, Text } from 'react-native'
import tw from '~/lib/tailwind'

const BadgeNumber = () => {
  return (
    <View style={tw('bg-radical-red-400 rounded-full px-2 py-1')}>
      <Text style={tw('text-white text-xs font-mont-semiBold')}>4.8</Text>
    </View>
  )
}

export default BadgeNumber
