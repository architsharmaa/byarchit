import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/byarchit?retryWrites=true&w=majority";

async function checkConnection() {
  await mongoose.connect(MONGODB_URI);
  console.log("CONNECTED TO:");
  console.log("- Host:", mongoose.connection.host);
  console.log("- Database Name:", mongoose.connection.name);
  console.log("- Collections:", (await mongoose.connection.db!.listCollections().toArray()).map(c => c.name));
  
  const builds = mongoose.connection.collection("builds");
  const count = await builds.countDocuments();
  console.log("- Build Count:", count);
  
  process.exit(0);
}

checkConnection();
