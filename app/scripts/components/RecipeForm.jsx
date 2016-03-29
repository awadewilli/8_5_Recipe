var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');

var models = require('../models/recipes');
var steps = [];

var RecipeForm = React.createClass({
  render: function(){
    return(
      <div>
        <RecipeNameForm />
        <StepsForm />
          <div className="col-md-8 col-md-offset-2 steps">
            <button className="btn btn-primary recipe-button" type="button" onClick={this.addRecipe}>
              Create new Recipe </button>
          </div>
      </div>

    );
  },
  addRecipe: function(e){
    e.preventDefault();
    var recipe = new models.Recipe();
    recipe.set({
      "title": $('#title').val(),
      "ingredients": steps
    });
    recipe.save(null, {
      success: function(recipe) {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + recipe.id);
        location.reload();

      },
      error: function(recipe, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
      }
    });
  }
});




var RecipeNameForm = React.createClass({

  render:function(){
    return(
      <div className="col-md-8 col-md-offset-2">

          <div className="row row-1">
            <div className="col-md-4">
                <div className="img-upload"></div>
            </div>
            <div className="col-md-8">
              <div className="row recipe-title">
                <div className="col-md-12">
                  <input type="text" className="form-control" id="title" placeholder="Recipe Name" name="recipeName"/>
                </div>
                <div className="col-md-12">
                  <input type="text" className="form-control" placeholder="By" name="by"/>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-2">
            <div className="col-md-4">
              <select className="form-control" placeholder="Recipe Type" name="recipeType">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Desser">Dessert</option>
              </select>
              </div>
            <div className="col-md-2">
              <input type="text" className="form-control" placeholder="Prep Time" name="prepTime"/>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" placeholder="Cook Time" name="cookTime"/>
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" placeholder="Cook Temp" name="cookTemp" />
              <select className="form-control" placeholder="Recipe Type" name="recipeName" >
                <option value="Breakfast"> &deg; F</option>
                <option value="Lunch">&deg; C</option>
              </select>
            </div>
          </div>

          <div className="row row-3">
            <div className="col-md-3 serving-cap">
                <span> This Recipe will make </span>
            </div>
            <div className="col-md-2">
              <input type="text" className="form-control" placeholder="Amount" name="amount"/>
            </div>
            <div className="col-md-7">
              <input type="text" className="form-control" placeholder="Cookies,Cupcakes, etc.." name="type"/>
            </div>
          </div>

      </div>
    );
  }
});

var StepsForm = React.createClass({

  render:function(){
      return(


        <div className="col-md-8 col-md-offset-2 steps">

          <div className="row" id="step-row">
            <Step/>
            <div className="col-md-12">
              <textarea className="form-control step-descrip" rows="4" placeholder="What instructions go with this step?">
              </textarea>
            </div>

            <div className="col-md-3">
              <button className="btn btn-primary" type="button" onClick={this.handleAdd}> Add another Step</button>
            </div>
          </div>
      </div>
      );
    },

    handleAdd:function(){
        var step = {'instruction':$('.step-descrip').val(), 'ingredient':$('.ingredient').val(),'unit':$('.units').val(),'amount':$('.ing-amt').val()};
        $('#step-row').prepend('<div class="step"><ul><li>' + step.unit + " " + step.ingredient + " " + step.amount + '</li></ul></div>');
        steps.push(step);
        console.log(step);
        console.log(steps);
      }
  });

  var Step = React.createClass({

    render:function(){
        return(
        <div className='row'>
          <div className="col-md-2">
            <input type="text" className="form-control ing-amt" placeholder="Amount" name="ingAmount"/>
          </div>

          <div className="col-md-3">
            <select className="form-control units" placeholder="Units" name="Units" >
              <option value="Cups"> Cups</option>
              <option value="Tsp">Tsp </option>
              <option value="Tbsp">Tbsp </option>
              <option value="Items">Items </option>
            </select>
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control ingredient" placeholder="Ingredient" name="ingredient"/>
          </div>
        </div>
      );
    }

});

module.exports=RecipeForm;
