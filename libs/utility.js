const Utility = (function utilityConstructor() {

  function isEmpty(obj) { return Object.entries(obj).length === 0; }

  return { isEmpty };

}());

module.exports = Utility;
