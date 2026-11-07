/** Deterministic pseudo-random in [0,1) so server and client render identical markup. */
export const rand = (i: number, seed = 1): number => {
  const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453;
  return Number((x - Math.floor(x)).toFixed(3));
};
