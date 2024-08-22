const request = require('request');
const { expect } = require('chai');

describe('Integration Test', () => {
    describe('GET /', () => {
        it('StatusCode: 200 | Body: Welcome to the payment system', (done) => {
            const options = {
                url: 'http://localhost:7865',
                method: 'GET',
            };

            request(options, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal('Welcome to the payment system');
                done();
            });
        });
    });

    describe('GET /cart/20', () => {
        it('Responds with 200 status code and id 20 in msg', (done) => {
          const options = {
            url: 'http://localhost:7865/cart/20',
            method: 'GET',
          };

          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 20');
            done();
          });
        });
    });

    describe('GET /cart/123', () => {
        it('Responds with 200 status code and id 123 in msg', (done) => {
          const options = {
            url: 'http://localhost:7865/cart/123',
            method: 'GET',
          };

          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 123');
            done();
          });
        });
    });

    describe('GET /cart/a20', () => {
        it('Responds with 404 status code', (done) => {
          const options = {
            url: 'http://localhost:7865/cart/a20',
            method: 'GET',
          };

          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
          });
        });
    });

    describe('GET /cart/a20b', () => {
        it('Responds with 404 status code', (done) => {
          const options = {
            url: 'http://localhost:7865/cart/a20b',
            method: 'GET',
          };

          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
          });
        });
    });

    describe('GET /cart/hello', () => {
        it('Responds with 404 status code', (done) => {
          const options = {
            url: 'http://localhost:7865/cart/hello',
            method: 'GET',
          };

          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
          });
        });
    });

    describe('GET /cart/', () => {
        it('Responds with 404 status code', (done) => {
          const options = {
            url: 'http://localhost:7865/cart/',
            method: 'GET',
          };

          request(options, function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
          });
        });
    });
});
