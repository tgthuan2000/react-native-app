import { View, Image, Text } from '.'

const SmallCard = ({ className = '' }) => {
  return (
    <View className={['flex-row p-3 bg-radical-red-300 rounded-lg justify-between', className]}>
      <View className='flex-shrink-0'>
        <Image source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }} className='w-11 h-11 rounded-full' />
      </View>
      <View className='flex-1 justify-between px-3'>
        <Text className='text-white font-mont-semiBold text-sm'>Hibe Neted</Text>
        <Text className='text-white font-mont-medium text-xs'>45 Reviews, 12 Followers</Text>
      </View>
      <View className='items-center justify-center'>
        <View className='bg-white px-2.5 py-1 rounded-full'>
          <Text className='text-radical-red-300 text-xs font-mont-semiBold'># 1</Text>
        </View>
      </View>
    </View>
  )
}

export default SmallCard
