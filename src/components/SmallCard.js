import { LinearGradient } from 'expo-linear-gradient'
import tw from '~/lib/tailwind'
import { View, Image, Text } from 'react-native'

const SmallCard = ({ className = '' }) => {
  return (
    <LinearGradient
      colors={['#FF8599', '#FF5C77']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={tw.style('p-3 flex-row rounded-lg justify-between', className)}
    >
      <View style={tw.style('flex-shrink-0')}>
        <Image
          source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }}
          style={tw.style('w-11 h-11 rounded-full')}
        />
      </View>
      <View style={tw.style('flex-1 justify-between px-3')}>
        <Text style={tw.style('text-white font-mont-semiBold text-sm')}>Hibe Neted</Text>
        <Text style={tw.style('text-white font-mont-medium text-xs')}>45 Reviews, 12 Followers</Text>
      </View>
      <View style={tw.style('items-center justify-center')}>
        <View style={tw.style('bg-white px-2.5 py-1 rounded-full')}>
          <Text style={tw.style('text-radical-red-300 text-xs font-mont-semiBold')}># 1</Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SmallCard
