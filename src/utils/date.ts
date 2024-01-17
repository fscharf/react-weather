export function getShortDate(date: string): string {
  const [, day, month] = date.split('-')

  return `${month}/${day}`
}
