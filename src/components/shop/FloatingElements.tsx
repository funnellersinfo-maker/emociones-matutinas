'use client';

import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8,
      size: 3 + Math.random() * 6,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float rounded-full bg-pink-200/20"
          style={{
            left: `${el.left}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            width: `${el.size}px`,
            height: `${el.size}px`,
          }}
        />
      ))}
    </div>
  );
}
