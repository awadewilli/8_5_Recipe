var Backbone = require('backbone');
var React = require('react');
var $ = require('jquery');
var ReactDom = require('react-dom');
var Parse = require('parse');

var RecipeForm = require('./components/RecipeForm.jsx');
var Login = require('./components/Signin.jsx');
var RecipesList = require('./components/RecipesList.jsx');

var Router = Backbone.Router.extend({
routes:{
      '':'renderLogin',
     'home':'renderHome',
     'recipes':'renderRecipes'
},

renderLogin:function(){
  ReactDom.render(
    React.createElement(Login, null),
    document.getElementById('login-container')
  );
  ReactDom.unmountComponentAtNode(document.getElementById('recipe-form'));


},
renderHome:function(){
  ReactDom.render(
    React.createElement(RecipeForm, null),
    document.getElementById('recipe-form')
  );
  ReactDom.unmountComponentAtNode(document.getElementById('login-container'));
},
renderRecipes:function(){
  ReactDom.render(
    React.createElement(RecipesList, null),
    document.getElementById('recipe-form')
  );
  ReactDom.unmountComponentAtNode(document.getElementById('recipe-form'));
}

});
module.exports = new Router();
