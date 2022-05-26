import { Feather } from '@expo/vector-icons'
import tw from '~/lib/tailwind'
import { View, Text } from 'react-native'

const Archive = ({ className = '' }) => {
  return (
    <View style={tw('items-center', className)}>
      <View style={tw('flex-shrink-0')}>
        <Feather name='star' size={18} color='#10B981' />
      </View>
      <Text style={tw('text-gray-900 font-mont-semiBold text-sm')}>Network</Text>
      <Text style={tw('text-xs text-gray-500 font-mont-medium')}>603</Text>
    </View>
  )
}

export default Archive
