import { useState, useEffect } from 'react'

export function useFetch(url) {
   const [data, setData] = useState([])
   const [error, setError] = useState(false)
   const [title, setTitle] = useState('')

   useEffect(() => {
      if (!url) return
      async function fetchData() {
         try {
            const response = await fetch(url)
            const data = await response.json()
            const title = data.basic_info?.title
            setData(data)
            setTitle(title)
         } catch (err) {
            console.log(err)
            setError(true)
         }
      }

      fetchData()
   }, [url])

   return { title, data, error }
}
