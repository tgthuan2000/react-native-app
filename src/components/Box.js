import { Text, View, Image, BadgeNumber } from '.'

const Box = ({ className = '' }) => {
  return (
    <View className={['rounded-xl', className]}>
      <View className='h-34 mb-1'>
        <Image
          className='w-full h-full object-cover rounded-xl'
          source='https://wallpaperaccess.com/full/2309745.jpg'
        />
      </View>
      <View className='flex-row items-center justify-between'>
        <View className='justify-between'>
          <Text className='text-gray-900 font-bold text-base'>Eastern Standard</Text>
          <Text className='text-gray-400 text-xs font-medium'>228 Park Ave S.NewYork</Text>
        </View>
        <View className='flex-row items-center'>
          {Array.from(Array(5)).map((item, index) => (
            <Image
              key={index}
              className='h-8 w-8 -ml-4 rounded-full border-2 border-white object-cover'
              source='https://wallpaperaccess.com/full/2309745.jpg'
            />
          ))}
          <View className='-ml-4'>
            <BadgeNumber />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Box
