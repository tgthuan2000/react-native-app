import { Image as ImageRn } from 'react-native'
import tw from '~/lib/tailwind'

const Image = ({ children, className, ...props }) => {
  return <ImageRn style={tw.style(className)} {...props} />
}

export default Image
