export const shuffleArray = (arr) => arr
  .map(v => ({ v, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map(({ v }) => v)