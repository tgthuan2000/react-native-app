import { ScrollView, View } from 'react-native'
import { ImageBox } from '~/components'
import tw from '~/lib/tailwind'

const Home = () => {
  return (
    <View style={tw.style('flex-1 bg-white p-2')}>
      <ScrollView>
        <ImageBox className='mb-2' />
        <View style={tw.style('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View style={tw.style('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View style={tw.style('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <ImageBox className='mb-2' />
        <View style={tw.style('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
        <View style={tw.style('flex-row')}>
          <ImageBox className='flex-1 mr-1 mb-2' />
          <ImageBox className='flex-1 ml-1 mb-2' />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
