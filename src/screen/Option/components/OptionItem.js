import { Feather } from '@expo/vector-icons'
import { Image, Text, TouchableNativeFeedback, View } from 'react-native'
import tw from '~/lib/tailwind'

const OptionItem = () => (
  <>
    <TouchableNativeFeedback>
      <View style={tw('p-3')}>
        <View style={tw('flex-row justify-between items-center')}>
          <View style={tw('flex-row items-center')}>
            <Image source={require('~assets/icons/pencil.png')} style={tw('h-5 w-5')} resizeMode='cover' />
            <Text style={tw('ml-2 font-mont-regular')}>Sign out</Text>
          </View>
          <Feather name='chevron-right' size={24} color='#374151' />
        </View>
      </View>
    </TouchableNativeFeedback>
    <View style={tw('h-px bg-gray-300')} />
  </>
)

export default OptionItem
