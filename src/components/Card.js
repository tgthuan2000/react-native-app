import { View, Image, Text } from 'react-native'
import tw from '~/lib/tailwind'
import { BadgeNumber } from '.'

const Card = ({ className = '' }) => {
  return (
    <View style={tw('flex-row border border-gray-100 rounded-lg h-28', className)}>
      <View style={tw('flex-1')}>
        <Image
          style={tw('w-full h-full rounded-tl-lg rounded-bl-lg')}
          source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }}
        />
      </View>
      <View style={tw('h-full justify-between px-4 py-2 flex-2 rounded-tr-lg rounded-br-lg')}>
        <Text style={tw('text-gray-500 font-mont-semiBold')}>6:30PM to 4AM</Text>
        <Text style={tw('text-xl font-mont-semiBold text-gray-900')}>The Raleigh Times</Text>
        <View style={tw('flex-row justify-between items-center')}>
          <View>
            <Text style={tw('text-xs text-gray-400 font-mont-medium')}>226 Fork Ave S, NY</Text>
            <Text style={tw('text-xs text-gray-400 font-mont-medium')}>Alcohol, Music, Dunce</Text>
          </View>
          <BadgeNumber />
        </View>
      </View>
    </View>
  )
}

export default Card
