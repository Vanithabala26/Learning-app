export function isValidConfidence(value: number): boolean {
  return (
    Number.isInteger(value) &&
    value >= 1 &&
    value <= 5
  );
}