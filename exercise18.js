// We need to bind the Array.prototype.slice() method to the prototype.call()

module.exports = Function.prototype.call.bind(Array.prototype.slice);