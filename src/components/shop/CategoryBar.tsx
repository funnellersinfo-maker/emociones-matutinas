'use client';

const categories = [
  { slug: 'todos', name: 'Todos', emoji: '🛍️', color: 'from-pink-400 to-rose-400' },
  { slug: 'peluches', name: 'Peluches', emoji: '🧸', color: 'from-amber-300 to-orange-300' },
  { slug: 'flores', name: 'Flores', emoji: '🌹', color: 'from-red-400 to-pink-400' },
  { slug: 'desayunos', name: 'Desayunos', emoji: '🎂', color: 'from-yellow-300 to-amber-300' },
  { slug: 'globos', name: 'Globos', emoji: '🎈', color: 'from-blue-300 to-cyan-300' },
  { slug: 'cumpleanos', name: 'Cumpleaños', emoji: '🎁', color: 'from-purple-300 to-pink-300' },
  { slug: 'aniversarios', name: 'Aniversarios', emoji: '💝', color: 'from-rose-400 to-red-400' },
  { slug: 'personalizados', name: 'Personalizados', emoji: '✨', color: 'from-violet-300 to-purple-300' },
  { slug: 'sorpresas', name: 'Sorpresas', emoji: '🎉', color: 'from-emerald-300 to-teal-300' },
];

interface CategoryBarProps {
  selected: string;
  onSelect: (slug: string) => void;
}

export function CategoryBar({ selected, onSelect }: CategoryBarProps) {
  return (
    <section className="py-4 sm:py-6 bg-white sticky top-[105px] sm:top-[113px] z-40 border-b border-pink-100/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar pb-1">
          {categories.map((cat) => {
            const isActive = selected === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => onSelect(cat.slug)}
                className={`flex-shrink-0 flex flex-col items-center gap-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl transition-all duration-300 min-w-[80px] sm:min-w-[90px] ${
                  isActive
                    ? `bg-gradient-to-br ${cat.color} text-white shadow-lg shadow-pink-200/50 scale-105`
                    : 'bg-pink-50/80 hover:bg-pink-100/80 text-gray-600 hover:text-gray-800'
                }`}
              >
                <span className="text-xl sm:text-2xl">{cat.emoji}</span>
                <span className={`text-[10px] sm:text-xs font-semibold whitespace-nowrap ${isActive ? 'text-white' : ''}`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
