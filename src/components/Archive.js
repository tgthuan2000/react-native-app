import { Feather } from '@expo/vector-icons'
import { View, Text } from '.'

const Archive = ({ className = '' }) => {
  return (
    <View className={['items-center', className]}>
      <View className='flex-shrink-0'>
        <Feather name='star' size={18} color='#10B981' />
      </View>
      <Text className='text-gray-900 font-mont-semiBold text-sm'>Network</Text>
      <Text className='text-xs text-gray-500 font-mont-medium'>603</Text>
    </View>
  )
}

export default Archive
