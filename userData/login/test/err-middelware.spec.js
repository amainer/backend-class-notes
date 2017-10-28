const chai = require('chai');
const errorMiddleware = require('../err-middleware');
const sinon = require('sinon');
const sinonchai = require('sinon-chai');

chai.use(sinonchai);

const expect = chai.expect;

describe('Error Middleware', () => {

  const res = {
    code: null,
    status: function (code) {
      this.code = code;
      return this
    },
    send: sinon.spy()
  };

  const err = 'This is a fake error string';

  afterEach(()=> {
    res.send.reset();
  });

  it('should be a function', () => {
    expect(errorMiddleware).to.be.a('function');
  });

  it('should set the status code to 401', () => {
    errorMiddleware(err, {}, res);
    expect(res.code).to.equal(401);
  });

  it('should call res.send with the correct error message', () => {
    errorMiddleware(err, {}, res);
    expect(res.send.calledOnce).to.be.true;
    expect(res.send.calledWith('Internal server error: This is a fake error string')).to.be.true;
  })

});
