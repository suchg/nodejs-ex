var express = require('express')
  , router = express.Router()
  , Comment = require('../models/comment')

  router.get('/:id', function( req, res ){
      Comment.get(123, function(err, data){
          res.send( data );
      })
  });

  module.exports = router