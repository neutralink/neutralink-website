
// src/lib/getCategoryBadgeColor.ts

export function getCategoryBadgeColor(category: string): string {
    const colorMap: Record<string, string> = {
      ESG: 'bg-green-100 text-green-800',
      Tecnologia: 'bg-blue-100 text-blue-800',
      Regulação: 'bg-yellow-100 text-yellow-800',
      Mercado: 'bg-purple-100 text-purple-800',
      Sustentabilidade: 'bg-emerald-100 text-emerald-800',
      Cases: 'bg-pink-100 text-pink-800',
    };
  
    // Retorna cor personalizada se existir, senão uma cor neutra baseada na string
    return colorMap[category] ?? generateColorFromString(category);
  }
  
  function generateColorFromString(str: string): string {
    const palette = [
      'bg-red-100 text-red-800',
      'bg-orange-100 text-orange-800',
      'bg-cyan-100 text-cyan-800',
      'bg-lime-100 text-lime-800',
      'bg-sky-100 text-sky-800',
      'bg-amber-100 text-amber-800',
      'bg-teal-100 text-teal-800',
    ];
  
    const index = Array.from(str).reduce((acc, char) => acc + char.charCodeAt(0), 0) % palette.length;
    return palette[index];
  }
  