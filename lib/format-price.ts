// Prices are stored in bani (Romanian cents), 100 bani = 1 RON
export function formatPriceInLei(priceInBani: number): string {
  return `${(priceInBani / 100).toFixed(2)} RON`;
}
