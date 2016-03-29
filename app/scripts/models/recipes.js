var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var Parse = require('parse');

var Recipe = Parse.Object.extend('Recipe');

var Ingredient = Parse.Object.extend("ingredient");

module.exports = {
  'Recipe':Recipe,
  'Ingredient':Ingredient
};
