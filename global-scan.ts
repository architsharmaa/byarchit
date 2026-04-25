import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function globalScan() {
  await mongoose.connect(MONGODB_URI);
  const admin = mongoose.connection.db!.admin();
  const { databases } = await admin.listDatabases();
  
  console.log("SEARCHING ACROSS ALL DATABASES...");
  
  for (const dbInfo of databases) {
    const db = mongoose.connection.useDb(dbInfo.name);
    const collections = await db.listCollections().toArray();
    
    for (const collInfo of collections) {
      const coll = db.collection(collInfo.name);
      const doc = await coll.findOne({ _id: new mongoose.Types.ObjectId("69eca1116805dbb919514375") });
      if (doc) {
        console.log(`\n💎 FOUND IT!`);
        console.log(`- Database: ${dbInfo.name}`);
        console.log(`- Collection: ${collInfo.name}`);
        console.log(`- Title: ${doc.title}`);
        process.exit(0);
      }
    }
  }
  
  console.log("\n❌ Still not found. It might be on a different MongoDB account or Cluster entirely.");
  process.exit(0);
}

globalScan();
