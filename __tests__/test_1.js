import sortGamers from '../src/matcher';

const listIn = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

const listOut = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('sort by health', () => {
  expect(sortGamers(listIn)).toEqual(listOut);
});
