import { MongoClient } from "mongodb";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function nuclearScan() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const admin = client.db().admin();
    const { databases } = await admin.listDatabases();
    
    console.log("🚀 STARTING NUCLEAR CLUSTER SCAN...");
    
    for (const dbInfo of databases) {
      if (dbInfo.name === "admin" || dbInfo.name === "local") continue;
      
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();
      
      for (const collInfo of collections) {
        const coll = db.collection(collInfo.name);
        const count = await coll.countDocuments();
        
        // Search by finding ANY document that matches "DealSim" anywhere in the text
        const found = await coll.find({ $text: { $search: "DealSim" } }).toArray()
          .catch(() => coll.find({ $or: [{ title: /DealSim/i }, { slug: /DealSim/i }, { content: /DealSim/i }] }).toArray());

        if (found && found.length > 0) {
          console.log(`\n💎 FOUND IT!`);
          console.log(`- Database: ${dbInfo.name}`);
          console.log(`- Collection: ${collInfo.name}`);
          console.log(`- Matching Documents: ${found.length}`);
          found.forEach(d => console.log(`  -> Title: ${d.title}, ID: ${d._id}`));
          process.exit(0);
        }
      }
    }
    
    console.log("\n❌ NUCLEAR SCAN COMPLETE. NO TRACE FOUND.");
  } finally {
    await client.close();
  }
}

nuclearScan();
