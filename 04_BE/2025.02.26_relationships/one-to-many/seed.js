import { User } from "./models/User.js";
import { Post } from "./models/Post.js";
import connectDB from "./libs/dbConnect.js";

connectDB();

await User.deleteMany({});
await Post.deleteMany({});

// User hinzufügen
const user1 = await User.create({name: "Jane Doe"});
const user2 = await User.create({name: "John Doe"});

// Posts für Jane hinzufügen
const p1 = await Post.create({content:"Ich bin Jane!", owner:user1._id});
const p2 = await Post.create({content:"Ich lernen Dokumentenbeziehungen", owner:user1._id})

// Posts für John hinzufügen
const p3 = await Post.create({content: "Hi, ich bin John!", owner:user2._id});
const p4 = await Post.create({content:"Ich will ein Hacker werden!", owner:user2._id});

console.log({p1});

user1.posts.push(p1);
user1.posts.push(p2);
await user1.save();

user2.posts.push(p3);
user2.posts.push(p4);
await user2.save();

console.log("Seed complete!");

process.exit(0);