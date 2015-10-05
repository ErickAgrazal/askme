Meteor.methods({
  addQuestion: function(doc){
    // Inserting into the database
    Questions.insert({
        question: doc.question,
        createdAt: new Date(),
        // owner: Meteor.userId()
    });
  },
  updateQuestion: function(id){
    Questions.update(
      {_id:id},
      {
        $inc: {counter:1}
      }
    );
  }
});
