import { View, Image, Text } from '.'

const ImageBox = ({ className = '' }) => {
  return (
    <View className={['relative h-36 rounded-xl', className]}>
      <Image className='w-full h-full bg-cover rounded-xl' source='https://wallpaperaccess.com/full/2309745.jpg' />
      <View className='absolute bottom-2 left-2'>
        <Text className='text-white font-semibold text-sm'>Legendary Bar</Text>
        <Text className='text-gray-400 font-medium text-xs'>20 Cooper Square New York</Text>
      </View>
    </View>
  )
}

export default ImageBox
