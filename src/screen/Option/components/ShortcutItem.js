import { Image, Text, View, TouchableNativeFeedback } from 'react-native'
import tw from '~/lib/tailwind'

const ShortcutItem = ({ onItemPress }) => (
  <View style={tw('p-2 w-1/2')}>
    <View style={tw('rounded-lg overflow-hidden shadow-lg')}>
      <TouchableNativeFeedback onPress={onItemPress}>
        <View style={tw('bg-white justify-between p-4')}>
          <Image source={require('~assets/icons/pencil.png')} style={tw('h-5 w-5')} resizeMode='cover' />
          <Text style={tw('mt-2 font-mont-regular text-sm text-gray-900')}>Hồ Thị Thơm</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  </View>
)

export default ShortcutItem
