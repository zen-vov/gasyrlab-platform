'use client'

import { useEffect, useState } from "react"

const LoadingAnimations = () => {
  const [framer] = useState(['\\', '|', '/', '-']);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % framer.length);
    }, 250)

    return () => clearInterval(interval)
  }, [framer])

  return (
    <span className="text-green-700">{framer[currentFrameIndex]}</span>
  )
}

export default LoadingAnimations