/**
* This a mixin for routes that only authenticated users have permission to see.
* Just include this mixin when creating any route that requires authentication.
* Change the transitionTo call to whatever route has your login form
*/
App.verifyLoginMixin = Ember.Mixin.create({
  beforeModel: function(){
    // this assumes your user info is stored in the application controller's model
    if( Ember.isEmpty(this.modelFor('application').user) ){
      // record the route so we can go back to it after login
      this.modelFor('application').previousRoute = this.get('router.url');
      this.transitionTo('login');
    }
  }
});
