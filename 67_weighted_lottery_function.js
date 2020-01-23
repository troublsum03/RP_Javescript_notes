const weightedLottery = weights => {
    let containerArray = [];
  
    Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
        containerArray.push(key);
      }
    });
  
    return containerArray[(Math.random() * containerArray.length) | 0];
  };
  
  const weights = {
   winning: 1, 
   losing: 1000
  };
  
  weightedLottery(weights);

  // weightedLottery(weights)

//Jordan's Solution
//1. Keep track of the weights
// store each of the colors in the array ['green','green','green','green','green','green','green','green', 'blue', 'blue' 'red']
//we want to keep track of the items and add them to the container array return containerArray[(Math.random() * containerArray.length) | 0]; The bit operator is the | 0. It is used to pull out the value 

//Bitwise operator 