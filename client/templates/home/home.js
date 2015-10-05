Template.home.helpers({
  questions: function(){
    var q = Questions.find({}, {sort: {counter: -1}});
    return q;
  },
});

Template.home.events({
  'click .up': function (events){
    Meteor.call("updateQuestion", this._id);
  }
})
