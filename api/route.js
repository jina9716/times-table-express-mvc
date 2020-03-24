'use strict';

module.exports = function(app){
  const tt = require('./times-table');
  app.route('/').get(function(req, res){
    res.render('index', {result: tt.timesTable()});
  });
};