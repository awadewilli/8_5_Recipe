var Backbone = require('backbone');
var React = require('react');
var ReactDom = require('react-dom');
var $ = require('jquery');
var Parse = require('parse');

  Parse.initialize('tiygvl');
  Parse.serverURL='http://slartybartfast.herokuapp.com/';






var LoginComp = React.createClass({

  render:function(){

    return(
  <div className="row">

    <div className="col-md-6" id="signup">
        <form className="form-signup" onSubmit={this.handleSignup}>
          <h2 className="form-signin-heading">No Account? Please sign up</h2>
          <input type="text" className="form-control" id="new-username" name="username" placeholder="Username" required="" autofocus="" />
          <input type="password" className="form-control" id="new-password" name="password" placeholder="Password" required=""/>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up!!!</button>
        </form>
      </div>

      <div className="col-md-6">
          <form id="login" className="form-signin" onSubmit={this.handleLogin}>
            <h2 className="form-signin-heading">Please login</h2>
            <input type="text" className="form-control" id="username" name="username" placeholder="Username" required="" autofocus="" />
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" required=""/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
},

  handleSignup:function(e){

    e.preventDefault();
    var user = new Parse.User();

    user.set({'username':$('#new-username').val(),'password':$('#new-password').val()});

    user.signUp(null, {
      'success': function(results){
        console.log("results: ", results);
        alert('Account Creation was successful');
        $('#signup').toggleClass('hidden');
      },
      'error': function(user, error){
        console.log(user, error);
      }

      });
    },

  handleLogin:function(e){
    e.preventDefault();

    Parse.User.logIn($('#username').val(),$('#password').val(), {
    success: function(user) {
      console.log("success");
      Backbone.history.navigate('home',{trigger:true})
    },
    error: function(user, error) {
        alert('Username or Password is invalid');
        location.reload();
    }
    });
  }
});
module.exports= LoginComp;
