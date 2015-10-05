Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'base',

  // the appNotFound template is used for unknown routes and missing lists
  notFoundTemplate: 'notFound',

  // show the appLoading template whilst the subscriptions below load their data
  loadingTemplate: 'loading',
});


if (Meteor.isClient) {
  // TODO
}

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });
});
