console.log("Hello World!");

var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var RecipeForm = require('./components/RecipeForm.jsx');
var $ = require('jquery');
var router = require('./router');


$('#signout').click(function(){
  localStorage.removeItem('Parse/tiygvl/currentUser');
  Backbone.history.navigate('',{trigger:true});
});

Backbone.history.start();
