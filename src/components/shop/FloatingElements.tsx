'use client';

import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{ id: number; emoji: string; left: number; delay: number; duration: number; size: number }>>([]);

  useEffect(() => {
    const emojis = ['💝', '✨', '⭐', '💕', '🌟', '💗', '💖', '🎊'];
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8,
      size: 12 + Math.random() * 16,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-float opacity-10"
          style={{
            left: `${el.left}%`,
            top: `${20 + Math.random() * 60}%`,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
            fontSize: `${el.size}px`,
          }}
        >
          {el.emoji}
        </div>
      ))}
    </div>
  );
}
