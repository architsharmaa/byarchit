import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function check() {
  await mongoose.connect(MONGODB_URI);
  const collection = mongoose.connection.collection("builds");
  const build = await collection.findOne({ slug: "DealSim" });
  
  if (build) {
    console.log("PROJECT FOUND:", build.title);
    console.log("CONTENT FIELD EXISTS:", "content" in build);
    console.log("CONTENT VALUE TYPE:", typeof build.content);
    console.log("CONTENT LENGTH:", build.content?.length || 0);
    console.log("TECH STACK:", build.techStack);
  } else {
    console.log("PROJECT NOT FOUND");
  }
  process.exit(0);
}

check();
