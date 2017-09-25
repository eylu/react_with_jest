import sum from '../../app/utils/sum';

function initializeCityDatabase(){
  return ['Beijing', 'Nanjing'];
}

beforeEach(() => {
  initializeCityDatabase();
});

describe('Utils', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    expect(value).not.toBe(0.3);    // It isn't! Because rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
