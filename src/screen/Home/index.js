import { ScrollView } from 'react-native'
import { ImageBox, View } from '~/components'

const Home = () => {
  return (
    <View className='flex-1 bg-white p-2'>
      <ScrollView>
        <ImageBox className='mb-2' />
        <View className='flex-row'>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View className='flex-row'>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View className='flex-row'>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <ImageBox className='mb-2' />
        <View className='flex-row'>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View className='flex-row'>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
