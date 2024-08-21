const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  describe('Two Integers numbers', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(2, 3), 5);
    });
  });

  describe('One round number', function () {
    it('should return 6', function () {
      assert.strictEqual(calculateNumber(2, 3.7), 6);
    });
  });

  describe('One round 2', function () {
    it('should return 6', function () {
      assert.strictEqual(calculateNumber(3.7, 2), 6);
    });
  });

  describe('One round floor number', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(2, 3.3), 5);
    });
  });

  describe('One round floor again', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(3.3, 1), 4);
    });
  });

  describe('Two round numbers', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });

  describe('Two round numbers again', function () {
    it('should return 6', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });

  describe('Two round reversed numbers', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
  });

  describe('Two round again floor both', function () {
    it('should return 3', function () {
      assert.strictEqual(calculateNumber(1.2, 2.1), 3);
    });
  });
});
