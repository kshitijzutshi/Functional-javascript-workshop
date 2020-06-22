/*
Notes on filter: Example of search 
Following example uses filter() to filter array content based on search criteria.

let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

/**
 * Filter array items based on search criteria (query)
 
function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    })
  }
  
  console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
  console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']

*/


function getShortMessages(messages) {
    const shortMsg = messages.filter(msg => msg.message.length < 50)

    const result = shortMsg.map((x) => {return x.message})
    
    return result;
  }
  
  module.exports = getShortMessages



// Alternate answer

//   module.exports = function getShortMessages(messages) {
//     return messages.filter(function(item) {
//       return item.message.length < 50
//     }).map(function(item) {
//       return item.message
//     })
//   }
