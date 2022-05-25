import { ScrollView } from 'react-native'
import { Box, View } from '~/components'

const Product = () => {
  return (
    <View className='flex-1 bg-white p-2'>
      <ScrollView>
        {Array.from(Array(10)).map((value, index) => (
          <Box key={index} className={index !== 10 && 'mb-2'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Product
