const users = require('../users')

const chai = require('chai');
const assert = chai.assert;

console.log(users.length);

describe('Users Module', () => {
  it('Users should be an array', () => {
    assert.equal(Array.isArray(users), true)
  })

  it('Users should have length = 5', () => {
    assert.equal(users.length, 5)
  })
});
