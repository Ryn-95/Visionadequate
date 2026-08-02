// Nos tarifs sont annoncés en prix plein (HT + frais d'agence de 20%),
// aucune TVA n'étant applicable (auto-entrepreneur, art. 293 B du CGI).
export function fullPrice(base: number): number {
  return Math.round(base * 1.2 * 100) / 100;
}

export function fraisAgence(base: number): number {
  return Math.round(base * 0.2 * 100) / 100;
}

export function formatEuro(n: number): string {
  return Number.isInteger(n) ? `${n}` : n.toFixed(2);
}
