
export function fixDecade(decade: string) {
  const now = new Date();
  if (decade.endsWith("s")) {
    decade = decade.slice(0, -1)
  }
  if (decade.match(/d{4}/) && Number(decade) > 1900 && Number(decade) < now.getFullYear()) {
    return Number(decade)
  }
  if (decade.match(/d{2}/) && decade.endsWith("0") && Number(decade) >= 30) {
    return (1900 + Number(decade))
  }
  if (decade.match(/d{2}/) && decade.endsWith("0") && Number(decade) <= 20) {
    return (2000 + Number(decade))
  }
  return "Invalid decade"
}
