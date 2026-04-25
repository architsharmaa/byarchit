import dbConnect from "./src/lib/mongodb";
import Build from "./src/lib/models/Build";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function check() {
  await dbConnect();
  const build = await Build.findOne({ slug: "DealSim" });
  if (build) {
    console.log("PROJECT FOUND:", build.title);
    console.log("CONTENT LENGTH:", build.content?.length || 0);
    console.log("CONTENT PREVIEW:", build.content?.substring(0, 50));
  } else {
    console.log("PROJECT NOT FOUND");
  }
  process.exit(0);
}

check();
