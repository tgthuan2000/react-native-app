import { View as ViewRn } from 'react-native'
import tw from '~/lib/tailwind'

const View = ({ children, className, ...props }) => {
  return (
    <ViewRn style={tw.style(className)} {...props}>
      {children}
    </ViewRn>
  )
}

export default View
