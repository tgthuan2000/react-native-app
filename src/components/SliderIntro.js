import { View, Text, Image } from 'react-native'
import React from 'react'
import BadgeNumber from './BadgeNumber'
import AppIntroSlider from 'react-native-app-intro-slider'
import tw from '~/lib/tailwind'

const SliderIntro = ({ setDone }) => {
  const buttonLabel = (label) => (
    <View style={tw('p-3')}>
      <BadgeNumber>{label}</BadgeNumber>
    </View>
  )

  return (
    <AppIntroSlider
      data={slides}
      activeDotStyle={tw('bg-radical-red-500 w-6')}
      renderNextButton={() => buttonLabel('Next')}
      renderDoneButton={() => buttonLabel('Done')}
      renderSkipButton={() => buttonLabel('Skip')}
      renderItem={({ item }) => (
        <View style={tw('flex-1 items-center justify-around pb-[100px]', { backgroundColor: item.backgroundColor })}>
          <Text style={tw('text-lg text-white text-center mb-4 font-mont-semiBold')}>{item.title}</Text>
          <Image style={tw('w-[200px] h-[200px]')} source={item.image} resizeMode='contain' />
          <Text style={tw('text-base text-white px-[30px]')}>{item.text}</Text>
        </View>
      )}
      onDone={() => setDone(true)}
      showSkipButton
    />
  )
}

export default SliderIntro

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Mobile Recharge',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
    },
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: 'Flight Booking',
    text: 'Upto 25% off on Domestic Flights',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: 'Great Offers',
    text: 'Enjoy Great offers on our all services',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
    },
    backgroundColor: '#22bcb5',
  },
  {
    key: 's4',
    title: 'Best Deals',
    text: ' Best Deals on all our services',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
    },
    backgroundColor: '#3395ff',
  },
  {
    key: 's5',
    title: 'Bus Booking',
    text: 'Enjoy Travelling on Bus with flat 100% off',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
    },
    backgroundColor: '#f6437b',
  },
  {
    key: 's6',
    title: 'Train Booking',
    text: ' 10% off on first Train booking',
    image: {
      uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
    },
    backgroundColor: '#febe29',
  },
]
