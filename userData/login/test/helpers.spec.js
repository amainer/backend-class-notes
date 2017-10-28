const helpers = require('../helpers')

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

const sinon = require('sinon');
const sinonchai = require('sinon-chai');

chai.use(sinonchai);

describe('Helper functions', () => {

  it('should be an object', () => {
    expect(helpers).to.be.an('object');
    expect(helpers).to.have.all.keys([
      'sendRequest',
      'validateUser'
    ]);
  });

  describe('sendRequest()', () => {

    it('should be a function', () => {
      expect(helpers.sendRequest).to.be.a('function');
    });

    it('should return a promise', () => {
      const result = helpers.sendRequest('http://localhost:3003');
      expect(result.then).to.be.a('function')
    })

    it('should return an object with a res and a body property', (done) => {
      helpers.sendRequest('http://localhost:300').then((response) => {
        expect(response).to.be.an('object');
        expect(response).to.have.all.keys([
          'res',
          'body'
        ]);
        done();
      }).catch((err) => {
        expect(err).to.be.null
        done();
      });
    });

    it ('should return a 404 error when calling a nonexistent url', (done) => {
      helpers.sendRequest('http://localhost:3001/notaurl').then((result) => {
        expect(result.statusCode).to.be(404);
      }).catch((err) => {
        expect(err).to.not.be.null;
        done();
      })
    })

  })

  describe('validateUser()', () => {

    it('should return true when an good user is provided', () =>{
      const testObjectArray = [{
        userName: 'amainer',
        password: 'fakePassword'
      }];

      const testObjectUser = {
        username: 'amainer',
        password: 'fakePassword'
      }

      const result = helpers.validateUser(testObjectArray, testObjectUser);
      expect(result).to.equal(true);
    });

    it('should return false when a bad user is provided', () =>{
      const testObjectArray = [
        { userName: 'amainer', password: 'fakePassword'}
      ];

      const testObjectUser = {
        username: 'amainer',
        password: 'wrongPassword'
      }

      const result = helpers.validateUser(testObjectArray, testObjectUser);
      expect(result).to.equal(false);
    })

  });

})
