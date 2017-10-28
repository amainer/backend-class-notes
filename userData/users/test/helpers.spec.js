const helpers = require('../helpers')

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;



describe('Helper function', () => {
  describe('validateUser()', () => {



    it('should return true when a valid user object is provided', () =>{
      const testObject = {
        userName: 'amainer',
        firstName: 'Andrew',
        lastName: 'Mainer',
        password: 'fakePassword',
      };

      const result = helpers.validateInput(testObject);
      expect(result).to.equal(true);
    })

    it('should return false when an ID is provided', () =>{
      const testObject = {
        userName: 'amainer',
        firstName: 'Andrew',
        lastName: 'Mainer',
        password: 'fakePassword',
        id: "1234567"
      };

      const result = helpers.validateInput(testObject);
      expect(result).to.equal(false);
    })

    it('should return false when an invalid user is provided', () =>{
      const testObject = {
        userName: 'amainer',
        firstName: 'Andrew',
        lastName: 'Mainer',
      };

      const result = helpers.validateInput(testObject);
      expect(result).to.equal(false);
    })
  })
})
