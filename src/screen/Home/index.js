import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native'
import tw from '~/lib/tailwind'
import { height } from '~/constants/theme'
import { SmallCard } from '~/components'
import { WaveLayout } from '~/Layout'

const bodyBadges = [
  {
    image: require('../../../assets/icons/arrow-up.png'),
    navigate: { screen: 'Loan' },
  },
  {
    image: require('../../../assets/icons/arrow-down.png'),
  },
  {
    image: require('../../../assets/icons/sort.png'),
    navigate: { screen: 'Statistic' },
  },
  {
    image: require('../../../assets/icons/pyramid-chart.png'),
  },
]

const Home = ({ navigation }) => {
  return (
    <WaveLayout>
      {/* Header */}
      <View style={tw('p-3 flex-row justify-between')}>
        <View>
          <Text style={tw('text-white text-sm font-mont-semiBold')}>Hoạt động</Text>
          <Text style={tw('text-white text-lg font-mont-bold')}>Xin Chào</Text>
        </View>
        <View style={tw('flex-row')}>
          <TouchableOpacity>
            <HeaderBadge>
              <Image
                source={require('../../../assets/icons/bell.png')}
                style={{ width: 24, height: 24 }}
                resizeMode='cover'
              />
            </HeaderBadge>
          </TouchableOpacity>
          <HeaderBadge className='ml-2'>
            <Image
              style={tw('h-full w-full rounded-[20px] bg-white')}
              source={{ uri: 'https://wallpaperaccess.com/full/2309745.jpg' }}
              resizeMode='cover'
            />
          </HeaderBadge>
        </View>
      </View>
      {/* Body */}
      <View style={tw('mt-2 flex-row justify-evenly')}>
        {bodyBadges.map(({ image, navigate }, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('HomeStack', navigate)
            }}
          >
            <BodyBadge>
              <Image source={image} resizeMode='cover' style={tw('h-8 w-8')} />
            </BodyBadge>
          </TouchableOpacity>
        ))}
      </View>
      {/* ScrollBody */}
      <ScrollView style={tw('mt-5 pb-10')} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {/* Loan */}
        <Wrapper title='Lịch sử gần đây' />
        {/* Loan */}
        <Wrapper title='Hoạt động vay gần đây' />
        {/* Get a loan */}
        <Wrapper title='Hoạt động cho vay gần đây' />
      </ScrollView>
    </WaveLayout>
  )
}

export default Home

const HeaderBadge = ({ children, className }) => (
  <View style={tw('h-12 w-12 rounded-[20px] bg-white items-center justify-center', className)}>{children}</View>
)

const BodyBadge = ({ children, className }) => (
  <View style={tw('h-16 w-16 rounded-[25px] bg-white items-center justify-center', className)}>{children}</View>
)

const Wrapper = ({ title = 'Title', onSeeAllPress, onItemPress }) => (
  <View style={tw('mt-5 px-3')}>
    <View style={tw('flex-row justify-between items-center')}>
      <Text style={tw('font-mont-bold text-base text-gray-900')}>{title}</Text>
      <TouchableOpacity onPress={onSeeAllPress}>
        <Text style={tw('font-mont-semiBold text-sm text-prussian-blue-300')}>Xem tất cả</Text>
      </TouchableOpacity>
    </View>
    <View style={tw('rounded-lg bg-white mt-1 p-4 border border-gray-200 min-h-[250px]', { height: height / 3 })}>
      <ScrollView style={tw('rounded-lg')} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {Array.from(Array(20)).map((item, index) => (
          <TouchableOpacity key={index} onPress={() => onItemPress?.(index)}>
            <SmallCard className={index !== 20 && 'mb-4'} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  </View>
)
