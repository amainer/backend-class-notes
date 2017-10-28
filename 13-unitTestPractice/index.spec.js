const index = require('./index')
const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Testing all functions', () => {

  describe('addFunc()', () => {
      it('Should be a function', () => {
        expect(index.addFunc).to.be.a('function');
      });

      it('Return 4 when 3 + 1 is passed', () =>{
        result = index.addFunc(3, 1);
        expect(result).to.equal(4);
      });

      it('Return an error when only 1 number is provided', () =>{
        result = index.addFunc(3);
        expect(result).to.equal("Error: invalid parameters!");
      });

      it('Return an error when string is provided', () =>{
        result = index.addFunc('Hello', 1);
        expect(result).to.equal("Error: invalid parameters!");
      });

      it('Return an error when nothing is provided', () =>{
        result = index.addFunc();
        expect(result).to.equal("Error: invalid parameters!");
      });
  })

  describe('addFunc()2', () => {
    it('Function 2 test on throw error', () => {
      try {
        addFunc2(5)
      } catch(e) {
        expect(e).to.not.be.null
      }
    })

    it('Function 2 test on throw error', () => {
      try {
        addFunc2('hello')
      } catch(e) {
        expect(e).to.not.be.null
      }
    })

    it('Use throw for an error', () => {
      expect(index.addFunc2).to.throw();
      expect(() => {addFunc2(5,'test')}).to.throw();
    })

  })

  describe('asyncSortArray', () => {
    it('should return the sorted array', (done) => {
      index.asyncSortArray([5,4,3], (err,sortedArray) => {
        expect(sortedArray).to.deep.equal([3,4,5])
        done();
      })
    })

    it('String throw an error', (done) => {
      index.asyncSortArray('hello', (err,sortedArray) => {
        expect(err).not.be.null
        done();
      })
    })

    it('Undefined throw an error', (done) => {
      index.asyncSortArray( undefined, (err,sortedArray) => {
        expect(err).not.be.null
        done();
      })
    })
  })

  describe('fetchFromDatabase', () => {
    it('Should return user when a valid id is passed', (done) => {
      index.fetchFromDatabase(1)
        .then((data) => {
          expect(data).to.deep.equal({ name: 'Spruce'})
          done()
        })
    })

    it('Should return invalid when no user is found', (done) => {
      index.fetchFromDatabase('invalid')
        .then((data) => {
          done();
        }).catch((err) => {
          expect(err).to.not.be.null
          done();
        })
    })

    it('Should return invalid when nothing is passed in', (done) => {
      index.fetchFromDatabase()
        .then((data) => {
          done();
        }).catch((err) => {
          expect(err).to.not.be.null
          done();
        })
    })

  })

});
