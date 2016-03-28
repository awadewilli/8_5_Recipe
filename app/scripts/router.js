var Backbone = require('backbone');
var React = require('react');
var $ = require('jquery');
var ReactDom = require('react-dom');
var Parse = require('parse');

var RecipeForm = require('./components/RecipeForm.jsx');
var Login = require('./components/Signin.jsx');

 console.log(Login);

var Router = Backbone.Router.extend({
routes:{
      '':'renderLogin',
     'home':'renderHome',
  // 'all':allRecipes
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
}

});
module.exports = new Router();
