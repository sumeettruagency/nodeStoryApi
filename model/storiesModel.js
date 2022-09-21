const mongoDb = require('mongoose');

const storiesSchema = mongoDb.Schema({
     title: {
          type: String,
          required: [true, "Please Enter Title"],
          trim: true,
          unique : true
     },
     discription: {
          type: String,
          required: [true, "Please Enter Discription"],
          trim: true,
     },
},
{
     timestamps: true
})

module.exports = mongoDb.model('Stories', storiesSchema);