import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;
const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log(`❌ Error on DB${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// export const videos = [
//   {
//     id: 349239,
//     title: "Awesome",
//     description: "Can`t take my eyes off you",
//     views: 24,
//     videoFile:
//       "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
//     creator: {
//       name: "Yeon",
//       email: "yeon@gmail.com",
//       id: 120010
//     }
//   }
// ];
