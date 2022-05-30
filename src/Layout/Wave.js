import { View, StatusBar } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { width } from '~/constants/theme'
import tw from '~/lib/tailwind'

const Wave = ({ children }) => {
  return (
    <View style={tw('flex-1 bg-gray-100')}>
      <StatusBar backgroundColor='#FF3355' />
      <View style={tw('absolute top-0 -z-10')}>
        <View style={tw('bg-radical-red-500 h-15 z-3', { width })}>
          <Svg style={tw('absolute top-0')} viewBox='0 0 1440 320' height={200} width={width}>
            <Path
              fill='#FF3355'
              d='M0,128L48,117.3C96,107,192,85,288,74.7C384,64,480,64,576,85.3C672,107,768,149,864,144C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            />
          </Svg>
        </View>
        <View style={tw('bg-radical-red-400 h-15 z-2', { width })}>
          <Svg style={tw('absolute top-0')} viewBox='0 0 1440 320' height={200} width={width}>
            <Path
              fill='#FF5C77'
              d='M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,245.3C672,267,768,245,864,240C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            />
          </Svg>
        </View>
        <View style={tw('bg-radical-red-300 h-15 z-1', { width })}>
          <Svg style={tw('absolute top-0')} viewBox='0 0 1440 320' height={200} width={width}>
            <Path
              fill='#FF8599'
              d='M0,256L48,250.7C96,245,192,235,288,245.3C384,256,480,288,576,288C672,288,768,256,864,240C960,224,1056,224,1152,234.7C1248,245,1344,267,1392,277.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
            />
          </Svg>
        </View>
      </View>
      <View style={tw('z-10 flex-1')}>{children}</View>
    </View>
  )
}

export default Wave
