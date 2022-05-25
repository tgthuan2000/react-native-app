import { ScrollView } from 'react-native'
import { Text, View, Input, Card, SmallCard } from '~/components'

const Eye = () => {
  return (
    <View className='flex-1 bg-white p-2'>
      <ScrollView>
        {Array.from(Array(20)).map((item, index) => (
          <SmallCard key={index} className={index !== 20 && 'mb-4'} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Eye
