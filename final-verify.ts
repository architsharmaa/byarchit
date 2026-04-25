import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function verify() {
  await mongoose.connect(MONGODB_URI);
  const Build = mongoose.connection.collection("builds");
  
  const doc = await Build.findOne({ _id: new mongoose.Types.ObjectId("69eca1116805dbb919514375") });
  
  if (doc) {
    console.log("✅ RECORD FOUND IN MONGO:");
    console.log("- Database: byarchit");
    console.log("- Collection: builds");
    console.log("- Title:", doc.title);
    console.log("- Content Length:", doc.content?.length || 0);
  } else {
    console.log("❌ RECORD NOT FOUND (Check if deletion occurred or another DB name is being used)");
  }
  
  process.exit(0);
}

verify();
