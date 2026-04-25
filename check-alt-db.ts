import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:YQr2cIokdOAgponT@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function check() {
  try {
    await mongoose.connect(MONGODB_URI);
    const builds = await mongoose.connection.db!.collection("builds").find({}).toArray();
    console.log("BUILDS FOUND WITH SECOND PASSWORD:", builds.length);
    builds.forEach(b => console.log(`- ${b.title} (slug: ${b.slug})`));
  } catch (e) {
    console.log("CONNECTION FAILED WITH SECOND PASSWORD");
  }
  process.exit(0);
}

check();
