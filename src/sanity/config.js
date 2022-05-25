import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'
import 'dotenv/config'

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: process.env.SANITY_VERSION_API,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const builder = ImageUrlBuilder(client)

const urlFor = (src) => src && builder.image(src).toString()

export { client, urlFor }
