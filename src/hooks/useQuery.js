import { useCallback, useState, useEffect } from 'react'
import { client } from '~/sanity/config'

const useQuery = (query, params = {}) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [data, setData] = useState([])
  const [options, setOptions] = useState(params)

  const fetch = useCallback(async () => {
    try {
      setLoading(true)
      const res = await client.fetch(query, options)
      setData(res)
    } catch (error) {
      console.log(error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [options])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: setOptions }
}

export default useQuery
