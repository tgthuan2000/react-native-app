import { Text, View, Image } from 'react-native'
import { IMAGE } from '~/constants/image'
import tw from '~/lib/tailwind'
import BadgeNumber from './BadgeNumber'

const Box = ({ className = '' }) => {
  return (
    <View style={tw('rounded-xl', className)}>
      <View style={tw('h-40 mb-1')}>
        <Image style={tw('w-full h-full rounded-xl')} source={{ uri: IMAGE.USER }} resizeMode='cover' />
      </View>
      <View style={tw('flex-row items-center justify-between')}>
        <View style={tw('justify-between')}>
          <Text style={tw('text-gray-900 font-mont-semiBold text-base')}>Eastern Standard</Text>
          <Text style={tw('text-gray-400 text-xs font-mont-medium')}>228 Park Ave S.NewYork</Text>
        </View>
        <View style={tw('flex-row items-center')}>
          {Array.from(Array(5)).map((item, index) => (
            <Image
              key={index}
              style={tw('h-8 w-8 -ml-4 rounded-full border-2 border-white')}
              source={{ uri: IMAGE.USER }}
              resizeMode='cover'
            />
          ))}
          <View style={tw('-ml-4')}>
            <BadgeNumber />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Box
