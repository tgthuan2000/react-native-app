import { View } from 'react-native'
import { CategoryButton, Archive } from '~/components'
import tw from '~/lib/tailwind'

const Settings = () => {
  return (
    <View style={tw.style('flex-1 bg-white p-2')}>
      <View style={tw.style('flex-row flex-wrap')}>
        {Array.from(Array(7)).map((item, index) => (
          <View key={index} style={tw.style('w-1/2')}>
            <CategoryButton className='ml-2 mb-2' />
          </View>
        ))}
      </View>

      <View style={tw.style('mt-2 flex-row flex-wrap justify-center')}>
        {Array.from(Array(7)).map((item, index) => (
          <Archive key={index} className='m-2' />
        ))}
      </View>
    </View>
  )
}

export default Settings
