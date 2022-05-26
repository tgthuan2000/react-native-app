import { BadgeNumber } from '.'
import { Text, View, Image } from 'react-native'
import tw from '~/lib/tailwind'

const Box = ({ className = '' }) => {
  return (
    <View style={tw.style('rounded-xl', className)}>
      <View style={tw.style('h-34 mb-1')}>
        <Image
          style={tw.style('w-full h-full rounded-xl')}
          source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }}
        />
      </View>
      <View style={tw.style('flex-row items-center justify-between')}>
        <View style={tw.style('justify-between')}>
          <Text style={tw.style('text-gray-900 font-mont-semiBold text-base')}>Eastern Standard</Text>
          <Text style={tw.style('text-gray-400 text-xs font-mont-medium')}>228 Park Ave S.NewYork</Text>
        </View>
        <View style={tw.style('flex-row items-center')}>
          {Array.from(Array(5)).map((item, index) => (
            <Image
              key={index}
              style={tw.style('h-8 w-8 -ml-4 rounded-full border-2 border-white')}
              source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }}
            />
          ))}
          <View style={tw.style('-ml-4')}>
            <BadgeNumber />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Box
