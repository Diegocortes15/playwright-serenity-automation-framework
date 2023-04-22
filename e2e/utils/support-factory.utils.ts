export const getRandomPositiveNumber = async (max: number): Promise<number> =>
  Math.floor(Math.random() * max);
