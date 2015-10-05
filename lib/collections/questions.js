// *******************
// Client's Schema
// *******************
Questions = new Mongo.Collection('questions');
Questions.attachSchema(new SimpleSchema({
  question: {
    type: String,
    label: "Pregunta",
    optional: false,
    min: 2,
    max: 250
  },
  counter: {
    type: Number,
    label: "Contador",
    min: 0,
    defaultValue: 0
  },
  createdAt: {
    type: Date,
    autoValue: function(){
      return new Date();
    }
  }
}));
