const Utils = {
  calculateNumber(type, a, b) {
    const rounda = Math.round(a);
    const roundb = Math.round(b);

    if (type === 'SUBTRACT') {
      return rounda - roundb;
    }

    if (type === 'DIVIDE') {
      if (roundb === 0) {
        return 'Error';
      }
      return rounda / roundb;
    }

    return rounda + roundb;
  },
};

module.exports = Utils;
