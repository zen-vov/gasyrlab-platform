'use client'

import { memo, useEffect, useState } from "react"

interface Props {
  duration?: number
}

const LoadingAnimations = ({ duration = 5000 }: Props) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      currentProgress += 10; 
      setProgress(Math.min(currentProgress, 100)); 
    }, duration / 10); 

    setTimeout(() => {
      clearInterval(interval);
    }, duration);

    return () => clearInterval(interval);
  }, [duration]);

  const filledPart = Array.from({ length: progress / 10 }, () => '\u2588').join('');
  const emptyPart = Array.from({ length: (100 - progress) / 10 }, () => '\u2591').join('');

  return <span className="flex items-center justify-center"><span className="text-[22px]">[</span>{filledPart}{emptyPart}<span className="text-[22px]">]</span></span>;
};

export default LoadingAnimations