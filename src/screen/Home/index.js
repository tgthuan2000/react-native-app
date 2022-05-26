import { ScrollView, View } from 'react-native'
import { ImageBox } from '~/components'
import tw from '~/lib/tailwind'

const Home = () => {
  return (
    <View style={tw('flex-1 bg-white p-2')}>
      <ScrollView style={tw('mt-7')} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <ImageBox className='mb-2' />
        <View style={tw('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View style={tw('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View style={tw('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <ImageBox className='mb-2' />
        <View style={tw('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View style={tw('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
