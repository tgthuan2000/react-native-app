import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import { Archive } from '~/components'
import { IMAGE } from '~/constants/image'
import { height } from '~/constants/theme'
import { EmptyLayout } from '~/Layout'
import tw from '~/lib/tailwind'
import ShortcutItem from './components/ShortcutItem'
import OptionItem from './components/OptionItem'

const Option = () => {
  return (
    <EmptyLayout>
      {/* Header */}
      <ImageBackground source={{ uri: IMAGE.USER }} style={{ height: height / 3 }} resizeMode='cover'>
        <View style={tw('flex-row justify-between items-center mx-4 mt-5')}>
          <View style={tw('flex-row items-center')}>
            <Image source={require('~assets/icons/notebook.png')} style={tw('w-6 h-6')} resizeMode='cover' />
            <Text style={tw('ml-2 font-mont-semiBold text-sm text-white')}>Thông tin cá nhân</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('~assets/icons/pencil.png')} style={tw('w-6 h-6')} resizeMode='cover' />
          </TouchableOpacity>
        </View>
        <View style={tw('mt-auto mb-5 w-full')}>
          <Text style={tw('text-center text-white font-mont-semiBold text-lg')}>Trần Gia Thuận</Text>
          <Text style={tw('text-center text-gray-400 font-mont-medium text-xs')}>Tân Phú, Việt Nam</Text>
        </View>
      </ImageBackground>
      {/* Body */}
      {/* Archive */}
      <ScrollView
        style={tw('flex-1 bg-gray-100')}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={tw('flex-row mt-4 justify-evenly')}>
          {Array.from(Array(3)).map((item, index) => (
            <Archive key={index} className='m-2' />
          ))}
        </View>
        {/* Lối tắt */}
        <View style={tw('px-2 mt-5')}>
          <Text style={tw('px-2 font-mont-semiBold text-sm text-gray-700')}>Tất cả lối tắt</Text>
          <View style={tw('mt-1 flex-row flex-wrap')}>
            {Array.from(Array(5)).map((item, index) => (
              <ShortcutItem key={index} />
            ))}
          </View>
        </View>
        {/* Optional */}
        <View style={tw('mt-5 mb-10')}>
          <Text style={tw('px-4 font-mont-semiBold text-sm text-gray-700')}>Tuỳ chọn khác</Text>
          <View style={tw('mt-1')}>
            {Array.from(Array(5)).map((item, index) => (
              <OptionItem key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
    </EmptyLayout>
  )
}

export default Option
