describe('multiplier', () => {
  const multiplier = (startValue) => {
    // return function object that will multiply given number with startValue;  
    return (anotherValue) => startValue * anotherValue;
  };

  describe('when given a number, a function is returned which when called', () => {
    it('returns the multiplication of the two numbers', () => {
      const times12 = multiplier(12); 
      assert.equal(times12(3), 36);
    });
  });
});

describe('counter', () => {
  // Used self-invoking function that runs only once. 
  const count = (() => {
    // Counter is hidden inside function and result is another function which use this counter.   
    let counter = 0;
    return () => counter++;
  })();

  it('returns an increasing number each time it is called', () => {
    assert.equal(count(), 0);
    assert.equal(count(), 1);
    assert.equal(count(), 2);
  });
});
