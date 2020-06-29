function getDependencies(tree,result) {
    // store output in result, else store emty array
    var result = result || [];
    let dependen = tree.dependencies || {};

    // Check if there are any dependencies present
    if(!tree.dependencies)
        return [];
    
    
    Object.keys(dependen).forEach(dep => {
        let depstr = dep + '@' + dependen[dep].version;

        // if the found dependency not in result
        if(result.indexOf(depstr) < 0){
            result.push(depstr);
        }
        getDependencies(dependen[dep],result)
    })

    return result.sort();

  }
  
  module.exports = getDependencies



  /*

Actual answer to compare notes



   function getDependencies(mod, result) {
      result = result || []
      var dependencies = mod && mod.dependencies || []
      Object.keys(dependencies).forEach(function(dep) {
        var key = dep + '@' + mod.dependencies[dep].version
        if (result.indexOf(key) === -1) result.push(key)
        getDependencies(mod.dependencies[dep], result)
      })
      return result.sort()
    }
    
    module.exports = getDependencies
    


  */