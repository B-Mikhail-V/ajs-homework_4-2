export default function sortGamers(params) {
  params.sort((a, b) => (a.health > b.health ? -1 : 1));
  return params;
}
