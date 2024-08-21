const calculateNumber = (a, b) => {
  const rounda = Math.round(a);
  const roundb = Math.round(b);

  return rounda + roundb;
};

module.exports = calculateNumber;
