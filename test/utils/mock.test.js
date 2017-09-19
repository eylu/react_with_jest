import forEach from '../../app/utils/mock';


describe('Utils:mock', () => {
  it('should show call length', () => {
    const mockCallback = jest.fn();
    forEach(['one', 'two'], mockCallback);

    console.log(mockCallback.mock.instances);

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe('one');

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe('two');
  });
});
