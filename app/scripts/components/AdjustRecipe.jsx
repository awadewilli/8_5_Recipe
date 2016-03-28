var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');

var adjustRecipe = React.createClass({

  render:function(){

      return(
        <div className="col-md-6">
          <form className="recipe-mod">
            <div className="form-group">
            <span>Makes
            <input className="servings" type="number"/>
            Servings
          </span>
            <button className="btn btn-primary btn-xs adjust">Adjust Servings</button>
          </div>
          </form>
          <div>
            <input type="checkbox"/>
            <span className="measurement">2 Cups</span>
            <span className="ingredient">Chicken</span>
          </div>
        </div>

      )
  }
})

module.exports = adjustRecipe;
