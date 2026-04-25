import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://archit04sharma_db_user:Kk7ZNkJLaEdEKwtr@cluster0.kicby6l.mongodb.net/?retryWrites=true&w=majority";

async function check() {
  await mongoose.connect(MONGODB_URI);
  const admin = mongoose.connection.db!.admin();
  const dbs = await admin.listDatabases();
  console.log("DATABASES IN CLUSTER:");
  dbs.databases.forEach(db => console.log(`- ${db.name}`));
  
  // Also check "test" database just in case
  const testDb = mongoose.connection.useDb("test");
  const testBuilds = await testDb.collection("builds").find({}).toArray();
  console.log("\nBUILDS IN 'test' DB:", testBuilds.length);
  testBuilds.forEach(b => console.log(`- ${b.title} (slug: ${b.slug})`));

  // Also check if there's a "builds" collection in the default connection that I missed
  const currentDbBuilds = await mongoose.connection.db!.collection("builds").find({}).toArray();
  console.log("\nBUILDS IN CURRENT DB:", currentDbBuilds.length);
  currentDbBuilds.forEach(b => console.log(`- ${b.title} (slug: ${b.slug})`));

  process.exit(0);
}

check();
