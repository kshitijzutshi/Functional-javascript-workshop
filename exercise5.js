/*
Task

Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
    
    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)
    
    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true
    
    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

*/

function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
      // if submittedUsers item.id in goodUsers item.id
    //   var isSame = true;
    //   for(var id in goodUsers){
    //       if(goodUsers[id] !== submittedUsers[id]){
    //           isSame = false;
    //           break;
    //       }
    //   }
    //   return isSame;

    // const isPresent = (currentValue) => currentValue.id === goodUsers.id
        return submittedUsers
                .every((submittedUser) => {
                    return goodUsers.some((goodUser) => {
                        return goodUser.id === submittedUser.id;
                    })
        })
      
      
    };
  }
  
  module.exports = checkUsersValid