import { View, Image, Text } from 'react-native'
import { IMAGE } from '~/constants/image'
import tw from '~/lib/tailwind'

const ImageBox = ({ className = '' }) => {
  return (
    <View style={tw('relative h-36 rounded-xl', className)}>
      <Image resizeMode='cover' style={tw('w-full h-full rounded-xl')} source={{ uri: IMAGE.USER }} />
      <View style={tw('absolute bottom-2 left-2')}>
        <Text style={tw('text-white font-mont-semiBold text-sm')}>Legendary Bar</Text>
        <Text style={tw('text-gray-400 font-mont-medium text-xs')}>20 Cooper Square New York</Text>
      </View>
    </View>
  )
}

export default ImageBox
