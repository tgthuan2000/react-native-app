import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'g7l2ck33',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'sk95Pg46sU76QlG1hnmSUSOo5rtVzbTQvVCufsGQIs1pyGaD5JZBCMRl16ML3LYDgZFTbDZqrwP1z0GhZQFVnb23jlD7wFSCVVJHx8gxnWYfYrHXKXAFfspxQqnNM58unL6mIm0FXv0Y017y70WrFHtxMIIexMCnTuChCyBZd10zHqSIHxr2',
  useCdn: false,
})

const builder = ImageUrlBuilder(client)

const urlFor = (src) => src && builder.image(src).toString()

export { client, urlFor }
