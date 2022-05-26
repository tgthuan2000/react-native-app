import { View, Image, Text } from 'react-native'
import tw from '~/lib/tailwind'

const ImageBox = ({ className = '' }) => {
  return (
    <View style={tw.style('relative h-36 rounded-xl', className)}>
      <Image
        style={tw.style('w-full h-full rounded-xl')}
        source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }}
      />
      <View style={tw.style('absolute bottom-2 left-2')}>
        <Text style={tw.style('text-white font-mont-semiBold text-sm')}>Legendary Bar</Text>
        <Text style={tw.style('text-gray-400 font-mont-medium text-xs')}>20 Cooper Square New York</Text>
      </View>
    </View>
  )
}

export default ImageBox
