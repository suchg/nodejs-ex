exports.create = function(user, text, cb) {
  console.log('Hiiii');
}

// Get a particular comment
exports.get = function(id, cb) {
  cb(null, {id:1234, text: 'Very nice example'})
}