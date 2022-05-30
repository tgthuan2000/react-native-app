import { View, StatusBar } from 'react-native'
import tw from '~/lib/tailwind'

const Empty = ({ children }) => {
  return (
    <View style={tw('flex-1 bg-gray-100')}>
      <StatusBar backgroundColor='#000' />
      {children}
    </View>
  )
}

export default Empty
