import { View, Image, Text } from '.'

const ImageBox = ({ className = '' }) => {
  return (
    <View className={['relative h-36 rounded-xl', className]}>
      <Image className='w-full h-full rounded-xl' source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }} />
      <View className='absolute bottom-2 left-2'>
        <Text className='text-white font-mont-semiBold text-sm'>Legendary Bar</Text>
        <Text className='text-gray-400 font-mont-medium text-xs'>20 Cooper Square New York</Text>
      </View>
    </View>
  )
}

export default ImageBox
