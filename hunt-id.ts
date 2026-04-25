import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function hunt() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const admin = client.db().admin();
    const { databases } = await admin.listDatabases();
    
    console.log("🏙️  HUNTING FOR ID 69eca1116805dbb919514375...");
    
    for (const dbInfo of databases) {
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();
      
      for (const collInfo of collections) {
        const coll = db.collection(collInfo.name);
        
        // Literal ID search
        const doc = await coll.findOne({ _id: new ObjectId("69eca1116805dbb919514375") });
        if (doc) {
          console.log(`\n🎯 TARGET ACQUIRED!`);
          console.log(`- Database: ${dbInfo.name}`);
          console.log(`- Collection: ${collInfo.name}`);
          console.log(`- Title: ${doc.title}`);
          console.log(`- Data:`, JSON.stringify(doc, null, 2));
          process.exit(0);
        }
      }
    }
    
    console.log("\n❌ Target not found in entire cluster.");
  } finally {
    await client.close();
  }
}

hunt();
