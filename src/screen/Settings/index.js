import { View, CategoryButton, Archive } from '~/components'

const Settings = () => {
  return (
    <View className='flex-1 bg-white p-2'>
      <View className='flex-row flex-wrap'>
        {Array.from(Array(7)).map((item, index) => (
          <View key={index} className='w-1/2'>
            <CategoryButton className='ml-2 mb-2' />
          </View>
        ))}
      </View>

      <View className='mt-2 flex-row flex-wrap justify-center'>
        {Array.from(Array(7)).map((item, index) => (
          <Archive key={index} className='m-2' />
        ))}
      </View>
    </View>
  )
}

export default Settings
