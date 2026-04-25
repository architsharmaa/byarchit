import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function finalAudit() {
  await mongoose.connect(MONGODB_URI);
  const collection = mongoose.connection.collection("builds");
  const allBuilds = await collection.find({}).toArray();
  
  console.log(`TOTAL BUILDS FOUND: ${allBuilds.length}`);
  allBuilds.forEach((b, i) => {
    console.log(`${i+1}. Title: ${b.title}, Slug: ${b.slug}, ID: ${b._id}`);
  });

  console.log("\n--- SEARCHING FOR DEALSIM ---");
  const bySlug = await collection.findOne({ slug: "DealSim" });
  console.log("Found by slug 'DealSim':", bySlug ? "YES" : "NO");

  const byId = await collection.findOne({ _id: new mongoose.Types.ObjectId("69eca1116805dbb919514375") });
  console.log("Found by ID '69eca1116805dbb919514375':", byId ? "YES" : "NO");
  
  if (byId) {
    console.log("Content length:", byId.content ? byId.content.length : "NO CONTENT FIELD");
  }
  
  process.exit(0);
}

finalAudit();
