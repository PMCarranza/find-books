const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// defining bookSchema
// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
// Each key in code bookSchema defines a property in the documents which will be cast to its associated SchemaType.   https://mongoosejs.com/docs/guide.html#definition

// properties: title, subtitle, authors all on the left hand size before the :
// Schema Types on the right hand size of the : 
// all are strings and all but subtitle are required
// only google id is unique
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

// const Book gets the DB so it can then be used elsewhere after export
const Book = mongoose.model("Book", bookSchema);

// The module.exports or exports is a special object which is included in every JS file in the Node.js application by default. module is a variable that represents current module and exports is an object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.
module.exports = Book;
