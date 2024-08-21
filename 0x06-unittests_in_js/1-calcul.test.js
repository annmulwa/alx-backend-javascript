const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('SUM without Round', function () {
    it('should return 8', function () {
      assert.equal(calculateNumber('SUM', 4, 4), 8);
    });
  });

  describe('SUM first number round', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('SUM', 2.4, 3), 5);
    });
  });

  describe('SUM second number round ', function () {
    it('should return 5', function () {
      assert.equal(calculateNumber('SUM', 3, 2.4), 5);
    });
  });

  describe('SUM both numbers round', function () {
    it('should return 9', function () {
      assert.equal(calculateNumber('SUM', 2.4, 6.5), 9);
    });
  });

  describe('SUBTRACT without round', function () {
    it('should return 3', function () {
      assert.equal(calculateNumber('SUBTRACT', 6, 3), 3);
    });
  });

  describe('SUBTRACT first number round', function () {
    it('should return 3', function () {
      assert.equal(calculateNumber('SUBTRACT', 5.3, 2), 3);
    });
  });

  describe('SUBTRACT second number round', function () {
    it('should return 4', function () {
      assert.equal(calculateNumber('SUBTRACT', 5.5, 2), 4);
    });
  });

  describe('SUBTRACT both numbers round', function () {
    it('should return -4', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE without round', function () {
    it('should return 2', function () {
      assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
    });
  });

  describe('DIVIDE first number round', function () {
    it('should return 3', function () {
      assert.equal(calculateNumber('DIVIDE', 5.5, 2), 3);
    });
  });

  describe('DIVIDE second number round', function () {
    it('should return 0.3', function () {
      assert.equal(calculateNumber('DIVIDE', 2, 7.5), 0.25);
    });
  });

  describe('DIVIDE both numbers round', function () {
    it('should return 0.2', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('DIVIDE zero Error', function () {
    it('should return an Error', function () {
      assert.equal(calculateNumber('DIVIDE', 6.4, 0), 'Error');
    });
  });
});
