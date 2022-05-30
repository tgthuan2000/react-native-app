import { ScrollView, View } from 'react-native'
import { Card } from '~/components'
import tw from '~/lib/tailwind'

const List = () => {
  return (
    <View style={tw('flex-1 bg-white')}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {Array.from(Array(20)).map((item, index) => (
          <Card key={index} className={index !== 20 && 'mb-4'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default List
