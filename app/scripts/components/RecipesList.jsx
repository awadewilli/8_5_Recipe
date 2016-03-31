var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var Parse = require('parse');
var ParseReact = require('parse-react');
var RecipesList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

    observe: function() {
      // Subscribe to all Recipe objects, ordered by creation date
      // The results will be available at this.data.recipes
      return {
        recipes: (new Parse.Query('Recipe')).descending('createdAt')
      };
    },

    render: function(){
      return (
          <ul>
            {this.data.recipes.map(function(recipe) {
              return <li key={recipe.id}>{recipe.title}:: {recipe.notes}</li>;
            })}
          </ul>
        );
    }
  });

module.exports=RecipesList;
