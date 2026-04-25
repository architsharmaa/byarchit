import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function detective() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const admin = client.db().admin();
    const { databases } = await admin.listDatabases();
    
    console.log("🕵️  STARTING GLOBAL DATA DETECTIVE SCAN...");
    
    for (const dbInfo of databases) {
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();
      
      for (const collInfo of collections) {
        const coll = db.collection(collInfo.name);
        
        // Search by ObjectId
        const byId = await coll.findOne({ _id: new ObjectId("69eca1116805dbb919514375") });
        // Search by slug just in case
        const bySlug = await coll.findOne({ slug: "DealSim" });
        // Search by title
        const byTitle = await coll.findOne({ title: "DealSim" });

        if (byId || bySlug || byTitle) {
          console.log(`\n🎯 FOUND DATA!`);
          console.log(`- Database: ${dbInfo.name}`);
          console.log(`- Collection: ${collInfo.name}`);
          console.log(`- Method: ${byId ? "ID Match" : bySlug ? "Slug Match" : "Title Match"}`);
          console.log(`- Document:`, JSON.stringify(byId || bySlug || byTitle, null, 2));
          process.exit(0);
        }
      }
    }
    
    console.log("\n🕵️  Scan complete. No trace of 'DealSim' or ID '69eca...' found in this cluster.");
  } catch (e) {
    console.error("Error during scan:", e);
  } finally {
    await client.close();
  }
}

detective();
