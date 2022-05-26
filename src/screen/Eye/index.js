import { ScrollView, View } from 'react-native'
import { SmallCard } from '~/components'
import tw from '~/lib/tailwind'

const Eye = () => {
  return (
    <View style={tw('flex-1 bg-white p-2')}>
      <ScrollView>
        {Array.from(Array(20)).map((item, index) => (
          <SmallCard key={index} className={index !== 20 && 'mb-4'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Eye
