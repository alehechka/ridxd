import ridxd from '../src';

const input = {
  '001': {
    name: 'John',
  },
  '002': {
    name: 'Basil',
  },
  '003': {
    name: 'Gregory',
  },
  '004': {
    name: 'Macrina',
  },
};
const expected = [
  { id: '001', name: 'John' },
  { id: '002', name: 'Basil' },
  { id: '003', name: 'Gregory' },
  { id: '004', name: 'Macrina' },
];

describe('ridxd', () => {
  it('works', () => {
    const output = ridxd(input, 'id');
    expect(output).toEqual(expected);
  });
});
