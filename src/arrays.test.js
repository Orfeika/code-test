const people = [
  {
    name: 'Fred',
    age: 27,
    interests: [
      'bowling',
      'golf',
    ],
  },
  {
    name: 'Wilma',
    age: 25,
    interests: [
      'running',
      'cinema',
    ],
  },
  {
    name: 'Barney',
    age: 28,
    interests: [
      'bowling',
      'running',
      'swimming',
    ],
  }
];

describe('getNamesOfPeopleOver', () => {
  const getNamesOfPeopleOver = limit => {
    // 1. Get array of people that are older over the given age using Array.filter()
    // 2. Create array of names using Array.map()
    return people.filter((person) => person.age > limit).map((person) => person.name);
  };

  it('returns an array of the names of all people over the given age', () => {
    assert.deepEqual(getNamesOfPeopleOver(26), ['Fred', 'Barney']);
  });
});

describe('getSumOfAllAges', () => {
  const getSumOfAllAges = () => {
    // Array.reduce() to calculate sum of all ages
    return people.reduce((prev, person) => prev + person.age, 0);
  };

  it('calculates the sum of all ages', () => {
    assert.equal(getSumOfAllAges(), 80);
  });
});

describe('getInterests', () => {
  const getInterests = () => {
    // 1. collect all interests from people array using Array.reduce() and Array.concat()
	// 2. remove duplicates using Array.filter() with Array.indexOf()
	// 3. Sort result array
    return people.reduce((prev, person) => prev.concat(person.interests), [])
      .filter((elem, pos, arr) => arr.indexOf(elem) === pos)
      .sort();
  };

  it('returns a array of all interests, no duplicates, sorted', () => {
    assert.deepEqual(getInterests(), ['bowling', 'cinema', 'golf', 'running', 'swimming']);
  });
});

describe('getNamesAndInterests', () => {
  const getNamesAndInterests = () => {
    // 1. Create  object with the names as keys using Array.reduce() and Object.assign() 
    return people.reduce((o, person) => Object.assign(o, { [person.name]: person.interests }), {});
  };

  it('returns an object with the names as keys, and the interests as values', () => {
    const expected = {
      Fred: [
        'bowling',
        'golf',
      ],
      Wilma: [
        'running',
        'cinema',
      ],
      Barney: [
        'bowling',
        'running',
        'swimming',
      ],
    };

    assert.deepEqual(getNamesAndInterests(), expected);
  });
});
