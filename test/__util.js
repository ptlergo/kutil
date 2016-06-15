const util = require('kutil');
const server = require('../src/server')
const request = require('supertest');


describe('Util Tool', () => {
  it('Should console and debug', (done) => {
    request(server)
    .get()
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      if (err) throw err;

      done();
    });
  });
})
