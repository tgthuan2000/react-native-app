import { Feather } from '@expo/vector-icons'
import tw from '~/lib/tailwind'
import { View, Text } from 'react-native'

const CategoryButton = ({ className = '' }) => {
  return (
    <View style={tw('flex-row p-2 bg-slate-200 rounded-lg items-center', className)}>
      <View style={tw('rounded-lg p-1 bg-yellow-400')}>
        <Feather name='eye' size={18} color='white' />
      </View>
      <View style={tw('ml-2')}>
        <Text style={tw('text-gray-500 text-sm font-mont-medium capitalize')}>Champagne</Text>
      </View>
    </View>
  )
}

export default CategoryButton
