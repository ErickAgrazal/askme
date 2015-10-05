// Default Session Variables
Session.setDefault("page", 1);
Session.setDefault("firstPage", true);
Session.setDefault("lastPage", false);

// Default Limits
var maxPages = 5;
var minPages = 1;

Template.registerHelper("equals", function (a, b) {
  return (a == b);
});

Template.presentation.helpers({
  page: function(){
    return Session.get("page");
  },
  firstPage: function(){
    var page = Session.get("page");
    if (page <= minPages){
      Session.set("firstPage", true);
    }
    else {
      Session.set("firstPage", false);
    }
    return Session.get("firstPage");
  },
  lastPage: function(){
    var page = Session.get("page");
    if (page >= maxPages){
      Session.set("lastPage", true);
    }
    else{
      Session.set("lastPage", false);
    }
    return Session.get("lastPage");
  }
});

Template.presentation.events({
  "click .next": function(event, template){
    var page = Session.get("page");
    if (page >= (maxPages - 1)){
      Session.set("page", maxPages);
    }
    else{
      Session.set("page", page+1);
    }
  },
  "click .previous": function(event, template){
    var page = Session.get("page");
    if (page <= (minPages + 1)){
      Session.set("page", minPages);
    }
    else {
      Session.set("page", page-1);
    }
  }
});
