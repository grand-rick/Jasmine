import myFunc from '../index';

describe('Suit to test myFunction', () => {
  it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
  });
  it('expect myFunc(9) to equal 45', () => {
    expect(myFunc(9)).toEqual(45);
  });
})