import { View, ScrollView } from 'react-native'
import { CategoryButton, Archive, Button } from '~/components'
import tw from '~/lib/tailwind'

const Settings = () => {
  return (
    <View style={tw('flex-1 bg-white')}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <View style={tw('flex-row flex-wrap')}>
          {Array.from(Array(7)).map((item, index) => (
            <View key={index} style={tw('w-1/2')}>
              <CategoryButton className='ml-2 mb-2' />
            </View>
          ))}
        </View>

        <View style={tw('mt-2 flex-row flex-wrap justify-center')}>
          {Array.from(Array(7)).map((item, index) => (
            <Archive key={index} className='m-2' />
          ))}
        </View>

        <View>
          <Button style={tw('mb-2')} onPress={() => alert(1)}>
            Button
          </Button>
          <Button style={tw('mb-2')} onPress={() => alert(1)}>
            Login
          </Button>
          <Button style={tw('mb-2')} onPress={() => alert(1)}>
            Finish
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}

export default Settings
