import { View, Image, Text, BadgeNumber } from '.'

const Card = ({ className = '' }) => {
  return (
    <View className={['flex-row shadow border border-gray-100 rounded-lg', className]}>
      <View className='flex-1'>
        <Image
          className='w-full h-full object-cover rounded-tl-lg rounded-bl-lg'
          source='https://wallpaperaccess.com/full/2309745.jpg'
        />
      </View>
      <View className='px-4 py-2 flex-2 rounded-tr-lg rounded-br-lg'>
        <Text className='text-gray-500 font-semibold'>6:30PM to 4AM</Text>
        <Text className='text-lg font-bold text-gray-900'>The Raleigh Times</Text>
        <View className='flex-row justify-between items-center'>
          <View>
            <Text className='text-xs text-gray-400 font-medium'>226 Fork Ave S, NY</Text>
            <Text className='text-xs text-gray-400 font-medium'>Alcohol, Music, Dunce</Text>
          </View>
          <BadgeNumber />
        </View>
      </View>
    </View>
  )
}

export default Card
