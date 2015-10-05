// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
  if (Questions.find().count() === 0) {
    var timestamp = (new Date()).getTime();
    var data = [
      {
        question: '¿Qué es Google Hacking?',
        createdAt: timestamp
      },
      {
        question: 'Más ejemplos sobre hacking éticos.',
        createdAt: timestamp
      },
      {
        question: 'No recuerdo que significa Reverse Engineering',
        createdAt: timestamp
      }
    ];
    _.each(data, function(client){
        Questions.insert(client);
    });
  };
});
