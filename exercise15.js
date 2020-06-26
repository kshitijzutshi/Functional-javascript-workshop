
function loadUsers(userIds, load, done) {
    var completed = 0
    var users = []
    userIds.forEach(function(id,index){
        load(id,function(user){
            users[index] = user
            if(++completed === userIds.length) return done(users)
        })
    });
}
   
  module.exports = loadUsers






/*
Old code that got passed!

async function loadUsers(userIds, load, done) {
    var users = []
    for (var i = 0; i < userIds.length; i++) {
        await users.push(load(userIds[i]))
    }
    return users;
  }
  
  module.exports = loadUsers




*/