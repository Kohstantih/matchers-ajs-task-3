export default function sorted(array) {
  return array.sort((a, b) => b.health - a.health);
}
