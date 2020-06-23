function duckCount() {
    // SOLUTION GOES HERE
        let i = 0;
        if(i <= arguments.length - 1){
            if('quack' in arguments[i] 
            && arguments[i].hasOwnProperty('quack') === true 
            && Object.prototype.hasOwnProperty.call(arguments[i], 'quack')){
                i+=1
                return arguments.length
    }
    else{
        arguments.slice(1)
        arguments.length--
        i+=1
    }
        }
        
  }
  
  module.exports = duckCount


  /*
Alternate solution!

 function duckCount() {
      return Array.prototype.slice.call(arguments).filter(function(obj) {
        return Object.prototype.hasOwnProperty.call(obj, 'quack')
      }).length
    }
    
    module.exports = duckCount
  */