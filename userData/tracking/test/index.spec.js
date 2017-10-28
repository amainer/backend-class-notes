
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Does main app work on server?', () => {
  describe('/', () => {
    it('should respond with a 200 when successful', (done) => {
      chai.request(app)
        .get('/tracking?username=amainer&currentDate=2017-09-27')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });

    it('Should error when query parameters are not included', (done) => {
      chai.request(app)
        .get('/tracking')
        .end((err, res) => {
          // expect(res.send.calledWith('Internal server error: Username or Date undefined')).to.be.true;
          expect(res).to.have.status(500);
          done();
        });
    });

    // expect(res.send.calledOnce).to.be.true;
    // expect(res.send.calledWith('Internal server error: This is a fake error string')).to.be.true;

    it('should return error when user accesses more than 5 times', (done) => {
      const mockApp = chai.request(app)
      mockApp.get('/tracking?username=amainer&currentDate=2017-09-27')
      .then(()=> {
          return mockApp.get('/tracking?username=amainer&currentDate=2017-09-27');
      })
      .then(()=> {
          return mockApp.get('/tracking?username=amainer&currentDate=2017-09-27');
      })
      .then(()=> {
          return mockApp.get('/tracking?username=amainer&currentDate=2017-09-27');
      })
      .then(()=> {
          return mockApp.get('/tracking?username=amainer&currentDate=2017-09-27');
      })
      .catch((err) => {
        expect(err).to.not.be.null
        expect(err).to.have.status(403);
        // expect(res).to.have.status(500);
        done();
      })

    });


    // it('Should respond with a 404 when there\'s an error', () => {
    //
    //   chai.request(app)
    //     .post('/users')
    //     .send({id:'109156be-c4fb-41ea-b1b4-efe1671c5836'})
    //     .end((err,res) => {
    //       expect(res).to.have.status(404);
    //       done();
    //     })
    // });
    //
    // it('Should return correct user when passed user id', () => {
    //   chai.request(app)
    //     .get('/users/c086a982-2a5c-49a8-ab04-36b052e695d9')
    //     .end((err,res) => {
    //       expect(err).to.be.null;
    //       expect(res).to.be.json;
    //       expect(res.body).to.deep.equal(usersData[0]);
    //     })
    // })

  });
});
