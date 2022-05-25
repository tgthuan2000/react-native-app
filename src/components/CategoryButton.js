import { Feather } from '@expo/vector-icons'
import { View, Text } from '.'

const CategoryButton = ({ className = '' }) => {
  return (
    <View className={['flex-row p-2 bg-slate-200 rounded-lg items-center', className]}>
      <View className='rounded-lg p-1 bg-yellow-400'>
        <Feather name='eye' size={18} color='white' />
      </View>
      <View className='ml-2'>
        <Text className='text-gray-500 text-sm font-medium capitalize'>Champagne</Text>
      </View>
    </View>
  )
}

export default CategoryButton
