import { Text as TextRn } from 'react-native'
import tw from '~/lib/tailwind'

const Text = ({ children, className, ...props }) => {
  return (
    <TextRn style={tw.style(className)} {...props}>
      {children}
    </TextRn>
  )
}

export default Text
