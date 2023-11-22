import { useEffect, useRef, useState } from 'react'
//effet d'écriture machine à écrire
export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
   const [currentPosition, setCurrentPosition] = useState(0)
   const curentPositionRef = useRef(0)
   useEffect(() => {
      const intervalId = setInterval(() => {
         setCurrentPosition((value) => value + 1)
         curentPositionRef.current += 1
         if (curentPositionRef.current > textToType.length) {
            clearInterval(intervalId)
         }
      }, interKeyStrokeDurationInMs)
      return () => {
         clearInterval(intervalId)
         curentPositionRef.current = 0
         setCurrentPosition(0)
      }
   }, [interKeyStrokeDurationInMs, textToType])
   return textToType.substring(0, currentPosition)
}
