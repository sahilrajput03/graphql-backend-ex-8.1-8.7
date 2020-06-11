// official documentation @ https://mongoosejs.com/docs/

const mongoose = require("mongoose");

function connectMongoDb() {
  console.log("Connecting to database☻");
  mongoose
    .connect("mongodb://localhost/admin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("connection successful☺");
    })
    .catch((error) => {
      console.log("error connection to MongoDB:", error.message);
    });
}

const Note = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
  },
  born: {
    type: Number,
  },
});

const User = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: false,
    minlength: 2,
  },
  name: {
    type: String,
  },
});

// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);

const modelUser = mongoose.model("User", User);
const modelNote = mongoose.model("Note", Note);

connectMongoDb();

async function peo() {
  // console.log("$log1-", await modelUser.collection.countDocuments());
  // console.log("$log2-", await modelUser.find({})); // This returns an array of document(objects).Yikes!!!
  // console.log("$log3-", await modelUser.find({ phone: { number: 235234 } }));
  // console.log("$log4-", await modelUser.findOne({ name: "sahil" }));//only the first matched document will be returned. OK
  // console.log("$log5-", await modelUser.findById("asfasf92h9sh9sf").populate("friends"));
  // console.log(await modelUser.findOne({ username: "sasflajsfkjlaskfrajput" }));// This throws null if it doesn't doesn't found any matching item.
  //
  //const randomSaving = await new modelUser({ username: "batman" }).save().populate("author"); //Populating along with saving is not allowed this way, rather this will throw error. :D LOL


  // saveWay1(); // This method executes failure of either or both of authentication and saving action.
  // await saveway2(); //This is best method, as you cannot rely on callbacks. Using sync style async is much better.
  // await modelUser.deleteMany({});
  // await modelUser.collection.insertOne((desiredObjet = {}));
  // await modelUser.collection.insertMany((desiredObjet = {})); //To write many documents.
  // await modelUser.collection.bulkWrite((desiredObjet = {})); //To write many documents.
  // async function saveway2() {
  //   try {
  //     const userSaved = await new modelUser({ username: "superman9" }).save(); //This line just create the _id property for the object, and checks for any error acc. to schema.
  //     console.log("saveduser- ", userSaved);
  //     } catch (error) {
  //     console.log(`==NAKED ERROR== ${error.message} ==produced by== ${error.name}`);
  //     // Handle from here for failed attempt only according to the error that is produced, you can send this eroor to frontend to, and do appropriate actions here only.
  //   }
  // }
  //   function saveWay1() {
  //   new modelUser({ username: "barfillamaan22" }) //(1)This line just create the _id property for the object.
  //     .save() // (1)This method first checks the authenticity against the defined criteria in schema and (2)then tries to save accordingly, and (3)returns the object with additional __v property.
  //     .then((q) => console.log("Yikess..!!", q)) //(1)This method executes on succesful saving to database operation.
  //     .catch((err) => console.log(`==NAKED ERROR== "${err.message} ==produced by== ${err.name}"`));
  // }
}
peo();

// official documentation @ https://mongoosejs.com/docs/
