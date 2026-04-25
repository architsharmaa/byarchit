import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function check() {
  await mongoose.connect(MONGODB_URI);
  const collections = await mongoose.connection.db!.listCollections().toArray();
  console.log("COLLECTIONS IN 'byarchit':");
  for (const coll of collections) {
    const count = await mongoose.connection.db!.collection(coll.name).countDocuments();
    console.log(`- ${coll.name} (${count} docs)`);
    
    // Search for DealSim in this collection
    const found = await mongoose.connection.db!.collection(coll.name).findOne({ 
      $or: [
        { title: /DealSim/i },
        { slug: /DealSim/i },
        { name: /DealSim/i }
      ]
    });
    if (found) {
      console.log(`  🔍 FOUND IN ${coll.name}!`);
      console.log(`  Data:`, JSON.stringify(found, null, 2));
    }
  }
  
  process.exit(0);
}

check();
