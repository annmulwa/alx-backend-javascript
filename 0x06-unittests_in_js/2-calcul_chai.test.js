const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function () {
  describe('SUM without Round', function () {
    it('should return 8', function () {
      chai.expect(calculateNumber('SUM', 4, 4)).to.equal(8);
    });
  });

  describe('SUM first number round', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('SUM', 2.4, 3)).to.equal(5);
    });
  });

  describe('SUM second number round ', function () {
    it('should return 5', function () {
      chai.expect(calculateNumber('SUM', 3, 2.4)).to.equal(5);
    });
  });

  describe('SUM both numbers round', function () {
    it('should return 9', function () {
      chai.expect(calculateNumber('SUM', 2.4, 6.5)).to.equal(9);
    });
  });

  describe('SUBTRACT without round', function () {
    it('should return 3', function () {
      chai.expect(calculateNumber('SUBTRACT', 6, 3)).to.equal(3);
    });
  });

  describe('SUBTRACT first number round', function () {
    it('should return 3', function () {
      chai.expect(calculateNumber('SUBTRACT', 5.3, 2)).to.equal(3);
    });
  });

  describe('SUBTRACT second number round', function () {
    it('should return 4', function () {
      chai.expect(calculateNumber('SUBTRACT', 5.5, 2)).to.equal(4);
    });
  });

  describe('SUBTRACT both numbers round', function () {
    it('should return -4', function () {
      chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE without round', function () {
    it('should return 2', function () {
      chai.expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
    });
  });

  describe('DIVIDE first number round', function () {
    it('should return 3', function () {
      chai.expect(calculateNumber('DIVIDE', 5.5, 2)).to.equal(3);
    });
  });

  describe('DIVIDE second number round', function () {
    it('should return 0.3', function () {
      chai.expect(calculateNumber('DIVIDE', 2, 7.5)).to.equal(0.25);
    });
  });

  describe('DIVIDE both numbers round', function () {
    it('should return 0.2', function () {
      chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE zero Error', function () {
    it('should return an Error', function () {
      chai.expect(calculateNumber('DIVIDE', 6.4, 0)).to.equal('Error');
    });
  });
});
