import { ScrollView } from 'react-native'
import { View, Card } from '~/components'

const Figma = () => {
  return (
    <View className='flex-1 bg-white p-2'>
      <ScrollView>
        {Array.from(Array(20)).map((item, index) => (
          <Card key={index} className={index !== 20 && 'mb-4'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Figma
