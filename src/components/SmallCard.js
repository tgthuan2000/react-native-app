import { View, Image, Text } from '.'

const SmallCard = ({ className = '' }) => {
  return (
    <View className={['flex-row p-3 text-radical-red-300 bg-radical-red-300 rounded-lg justify-between', className]}>
      <View className='flex-shrink-0'>
        <Image source='https://wallpaperaccess.com/full/2309745.jpg' className='object-cover w-11 h-11 rounded-full' />
      </View>
      <View className='flex-1 justify-between px-3'>
        <Text className='text-white font-bold text-sm'>Hibe Neted</Text>
        <Text className='text-white font-medium text-xs'>45 Reviews, 12 Followers</Text>
      </View>
      <View className='items-center justify-center'>
        <View className='bg-white px-2.5 py-1 rounded-full'>
          <Text className='text-current text-xs font-bold'># 1</Text>
        </View>
      </View>
    </View>
  )
}

export default SmallCard
