import { TextInput as TextInputRn } from 'react-native'
import tw from '~/lib/tailwind'

const TextInput = ({ className, ...props }) => <TextInputRn style={tw.style(className)} {...props} />

const Input = ({ className = '', ...props }) => {
  return (
    <TextInput
      placeholder='Placeholder'
      className={['border border-gray-300 rounded-md px-6 py-3 bg-gray-100 text-gray-900', className]}
      {...props}
    />
  )
}

export default Input
