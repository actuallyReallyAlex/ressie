const add = (x, y) => x + y

describe('Add', () => {
  test('Add 2 and 3', () => {
    expect(add(2, 3)).toBe(5)
  })
})
