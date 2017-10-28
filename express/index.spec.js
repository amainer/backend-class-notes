const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./index');
const expect = chai.expect;

chai.use(chaiHttp);

// const puppies = [
//   {
//     id: 1,
//     name: 'Jip',
//     breed: 'corgie/boston mix',
//     likes: ['being hand fed by mom'],
//     dislikes: ['other dogs']
//   },
//   {
//     id: 2,
//     name: 'Lily',
//     breed: 'boston terrier',
//     likes: ['sleeping in a clothes basket', 'attention'],
//     dislikes: ['other dogs']
//   }
// ];
//
//
// describe('Puppies', () => {
//   describe('Object', () => {
//     it('Should response with puppies object when successful', (done) => {
//       chai.request(app)
//         .get('/puppies')
//         .end((err, res) => {
//           expect(err).to.be.null;
//           expect(res.body).to.deep.equal(puppies);
//           done();
//         });
//     });
//   });
// });


describe('Routes', () => {
  describe('/', () => {
    it('should respond with a 200 whene successful', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
    it('should respond with the correct message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.be.html;
          expect(res.text).to.equal('My Root Endpoint')
          done();
        });
    });
  });
});
