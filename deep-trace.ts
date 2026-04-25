import { MongoClient } from "mongodb";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function deepTrace() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const admin = client.db().admin();
    const { databases } = await admin.listDatabases();
    
    console.log("🕵️  DEEP TRACE: SCANNING ALL DATABASES FOR 'DEALSIM'...");
    
    for (const dbInfo of databases) {
      if (dbInfo.name === "admin" || dbInfo.name === "local") continue;
      
      const db = client.db(dbInfo.name);
      const collections = await db.listCollections().toArray();
      
      for (const collInfo of collections) {
        const coll = db.collection(collInfo.name);
        const docs = await coll.find({}).toArray();
        if (docs.length > 0) {
          console.log(`\n📂 DB: ${dbInfo.name} | Collection: ${collInfo.name} (${docs.length} docs)`);
          docs.forEach(doc => {
             if (doc.title === "DealSim" || doc.slug === "DealSim") {
               console.log(`  🌟 FOUND! [ID: ${doc._id}] [Title: ${doc.title}] [Slug: ${doc.slug}]`);
             } else {
               // console.log(`  - ${doc.title || doc.name || doc._id}`);
             }
          });
        }
      }
    }
  } finally {
    await client.close();
  }
  process.exit(0);
}

deepTrace();
