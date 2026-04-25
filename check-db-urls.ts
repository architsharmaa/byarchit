import mongoose from "mongoose";
import Build from "./src/lib/models/Build";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

const MONGODB_URI = process.env.MONGODB_URI || "";

async function check() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to", mongoose.connection.name);

  const builds = await Build.find({}, 'title imageUrl');
  console.log("Build URLs:");
  builds.forEach((b: any) => {
    console.log(`- ${b.title}: ${b.imageUrl}`);
  });
  process.exit(0);
}

check();
