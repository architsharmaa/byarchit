import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb://127.0.0.1:27017/byarchit";

async function localCheck() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("byarchit");
    const builds = await db.collection("builds").find({}).toArray();
    
    console.log("BUILDS FOUND LOCALLY:", builds.length);
    builds.forEach((b, i) => {
      console.log(`${i+1}. ${b.title} (ID: ${b._id})`);
    });
    
  } catch (e) {
    console.log("LOCAL MONGODB NOT ACCESSIBLE OR 'byarchit' DB MISSING");
  } finally {
    await client.close();
  }
  process.exit(0);
}

localCheck();
