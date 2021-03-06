import { ScrollView, View } from 'react-native'
import { Box } from '~/components'
import tw from '~/lib/tailwind'

const Product = () => {
  return (
    <View style={tw('flex-1 bg-white')}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {Array.from(Array(10)).map((value, index) => (
          <Box key={index} className={index !== 10 && 'mb-2'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Product
