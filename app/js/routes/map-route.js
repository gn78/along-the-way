'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var querystring = require('querystring');

var RouteModel = require('../models/route-model');
var routeModel = new RouteModel();

module.exports = function() {
	var MapView = require('../views/map-view');
	var mapView = new MapView({model: this.testModel});
	$('#backbone').html(mapView.$el);
};