import { ScrollView, View } from 'react-native'
import { Card } from '~/components'
import tw from '~/lib/tailwind'

const Figma = () => {
  return (
    <View style={tw.style('flex-1 bg-white p-2')}>
      <ScrollView>
        {Array.from(Array(20)).map((item, index) => (
          <Card key={index} className={index !== 20 && 'mb-4'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Figma
