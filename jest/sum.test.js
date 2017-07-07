const sum = require('./sum');
const add = sum.add;
const foods = ['avacado toast', 'croissant', 'macaroon'];

// exact equality
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})

// check the value of an object
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// interesting truthy cases
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// strings
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});

test('food list includes macaroon in it', () => {
  expect(foods).toContain('macaroon');
});

