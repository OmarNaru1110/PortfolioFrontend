import { useMemo } from 'react';
import cloud1 from '../assets/cloud1.svg';
import cloud2 from '../assets/cloud2.svg';
import cloud3 from '../assets/cloud3.svg';

export function CloudPattern({ className = '' }: { className?: string }) {
  // Randomly select one of three cloud patterns
  const cloudSrc = useMemo(() => {
    const patterns = [cloud1, cloud2, cloud3];
    return patterns[Math.floor(Math.random() * patterns.length)];
  }, []); // Empty dependency array ensures pattern is chosen once per component instance

  return (
    <img
      src={cloudSrc}
      alt="Cloud pattern"
      className={className}
    />
  );
}
