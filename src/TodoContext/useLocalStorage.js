import { useState, useEffect } from 'react'

function useLocalStorage(itemName, initialValue) {

    const [ error, setError ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ item, setItem ] = useState(initialValue)
  
    useEffect(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
        
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch(error) {
        setError(error)
      }
    // eslint-disable-next-line
    }, [])
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {
      item, 
      saveItem,
      loading,
      error
    }
  }

export { useLocalStorage }