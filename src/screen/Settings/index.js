import { View, CategoryButton } from '~/components'

const Settings = () => {
  return (
    <View className='flex-1 bg-white p-2'>
      <View className='flex-row flex-wrap'>
        <View className='w-1/2'>
          <CategoryButton className='ml-2 mb-2' />
        </View>
        <View className='w-1/2'>
          <CategoryButton className='ml-2 mb-2' />
        </View>
        <View className='w-1/2'>
          <CategoryButton className='ml-2 mb-2' />
        </View>
        <View className='w-1/2'>
          <CategoryButton className='ml-2 mb-2' />
        </View>
        <View className='w-1/2'>
          <CategoryButton className='ml-2 mb-2' />
        </View>
      </View>
    </View>
  )
}

export default Settings
