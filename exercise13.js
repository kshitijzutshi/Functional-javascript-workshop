function repeat(operation, num) {
    // modify this so it can be interrupted
    // console.log(`HELLO NUMBER ${num}`);
    
    if (num <= 0) return
    operation();
    // setInterval(operation,100);
    // let out = setTimeout(repeat,100,operation, --num)
    // return out;
    if (num % 100 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }
  }
  
  module.exports = repeat



  /*
OFFICIAL ANSWER

 function repeat(operation, num) {
      if (num <= 0) return
    
      operation()
    
      // release control every 10 or so
      // iterations.
      // 10 is arbitrary.
      if (num % 10 === 0) {
        setTimeout(function() {
          repeat(operation, --num)
        })
      } else {
        repeat(operation, --num)
      }
    }
    
    module.exports = repeat
    


  */