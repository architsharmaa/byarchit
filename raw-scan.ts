import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function globalScan() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const admin = client.db().admin();
    const { databases } = await admin.listDatabases();
    
    console.log("SEARCHING ACROSS ALL DATABASES...");
    
    for (const dbInfo of databases) {
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();
      
      for (const collInfo of collections) {
        const coll = db.collection(collInfo.name);
        try {
          const doc = await coll.findOne({ _id: new ObjectId("69eca1116805dbb919514375") });
          if (doc) {
            console.log(`\n💎 FOUND IT!`);
            console.log(`- Database: ${dbInfo.name}`);
            console.log(`- Collection: ${collInfo.name}`);
            console.log(`- Title: ${doc.title}`);
            process.exit(0);
          }
        } catch (e) {
          // Skip if _id is not an ObjectId model (like capped collections)
        }
      }
    }
    
    console.log("\n❌ Still not found. It might be on a different MongoDB account or Cluster entirely.");
  } finally {
    await client.close();
  }
}

globalScan();
