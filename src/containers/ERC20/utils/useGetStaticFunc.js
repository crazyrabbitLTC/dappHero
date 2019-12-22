import {useState, useEffect} from 'react'

function useGetStaticFunc(instance, signature) {
  const [value, setValue] = useState(null)

  useEffect(() => {
    async function getValue() {
      let value
      try {
        value = await instance.methods[signature]().call()
      } catch (error) {
        console.log('The Function View Static error: ', error)
      }
      setValue(value)
    }
    getValue()
  }, [])

  return value
}

export {useGetStaticFunc as default}