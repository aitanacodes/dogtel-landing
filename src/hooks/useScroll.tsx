import { useEffect } from 'react'

const useScroll = (callback: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', callback)
    return () => {
      window.removeEventListener('scroll', callback)
    }
  }, [callback])
}

export default useScroll

