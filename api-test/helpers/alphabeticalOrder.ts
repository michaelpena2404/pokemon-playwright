export function alphabeticalOrder<T extends { name: string }>(array: T[]): T[] {
  const copy = [...array];
  const n = copy.length;

  // Implementación del método de la burbuja (bubble sort)
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (copy[j].name > copy[j + 1].name) {
        // Intercambiar elementos adyacentes
        const temp = copy[j];
        copy[j] = copy[j + 1];
        copy[j + 1] = temp;
        swapped = true;
      }
    }
    
    // Si no hubo intercambios, el array ya está ordenado
    if (!swapped) break;
  }

  return copy;
}