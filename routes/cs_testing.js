/*
Author: Adam Lewenhaupt
Keywords: Testing, Client-Side
Description:
This route provides a test environment for client-side scripting.
*/

exports.cs_testing = function(req, res){
  res.render('cs_testing', { title: 'SS Testing' });
};