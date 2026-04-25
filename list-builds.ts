import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function check() {
  await mongoose.connect(MONGODB_URI);
  const collection = mongoose.connection.collection("builds");
  const builds = await collection.find({}).toArray();
  
  console.log("TOTAL BUILDS:", builds.length);
  builds.forEach(b => {
    console.log(`- Title: ${b.title}, Slug: ${b.slug}, Content: ${"content" in b ? "YES" : "NO"}`);
  });
  
  process.exit(0);
}

check();
