function validDenomination(coin) {
    // checks if coin is valid
    return [1, 5, 10, 25, 50, 100].indexOf(coin) !== -1;
  }
  
  function valueFromCoinObject(obj) {
    // extracting denom and count from obj
    const {
      denom = 0,
      count = 0,
    } = obj;
    // returning value
    return denom * count;
  }
  
  function valueFromArray(arr) {
      function addValues(value){
        if(validDenomination = false){
            return 0;
        }
        else{
            return
        }
      }
    // handling the case where arr contains an inner array
    if (Array.isArray(arr[0])) {
      arr = arr[0];
    }
    // summing up the values of all the coin objects in arr
    return arr.reduce(
      (accumulator, currentObj) => accumulator + valueFromCoinObject(currentObj),0);
  }
  
  function coinCount(...coinage) {
    // calls valueFromArray with coinage
    return valueFromArray(coinage);
  }
  
  // exporting coinCount
  module.exports = {
    coinCount
  };
  
  
  // requiring coinCount from ./p3-module.js
  const {
    coinCount
  } = require('./p3-module.js');
  
  // testing code
  console.log("{}", coinCount({denom: 5, count: 3}));
  console.log("{}s", coinCount({denom: 5, count: 3}, {denom: 10, count: 2}));
  const coins = [{denom: 25, count: 2}, {denom: 1, count: 7}];
  console.log("...[{}]", coinCount(...coins));
  console.log("[{}]", coinCount(coins)); // Extra credit
