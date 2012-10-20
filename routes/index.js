/*
Author: Adam Lewenhaupt
Keywords: Routing, Index
Description:
This is the index file of the routes module
and provides access to all routes.
*/

var ajax_login = require('./login'),
    ajax_create = require('./create'),
    ajax_make_friends = require('./make_friends'),
    ajax_get_user = require("./get_user"),
    ajax_send_friend_request = require("./send_friend_request"),
    ssv = require('../ssv');

exports.index = function(req, res){
    res.render('index', { title: 'Express', user: req.user, ssv: ssv.fetch() });
}

exports.ajax = {
	get_user: ajax_get_user.route,
    login: ajax_login.route,
    create: ajax_create.route,
    make_friends: ajax_make_friends.route,
    send_friend_request: ajax_send_friend_request.route
};