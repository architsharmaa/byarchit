"use server";

import { login as authLogin, logout as authLogout } from "@/lib/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import SiteConfig from "@/lib/models/SiteConfig";
import Build from "@/lib/models/Build";
import Writing from "@/lib/models/Writing";
import NowPage from "@/lib/models/NowPage";
import AboutPage from "@/lib/models/AboutPage";
import dbConnect from "@/lib/mongodb";

export async function loginAction(state: any, formData: FormData) {
  const password = formData.get("password") as string;
  const success = await authLogin(password);

  if (success) {
    redirect("/admin");
  } else {
    return { error: "Invalid password" };
  }
}

export async function logoutAction() {
  await authLogout();
  redirect("/admin/login");
}

// --- Content Actions ---

export async function updateSiteConfig(data: any) {
  await dbConnect();
  await SiteConfig.findOneAndUpdate({}, data, { upsert: true });
  revalidatePath("/");
  revalidatePath("/admin/site-config");
}

export async function saveBuild(id: string | null, data: any) {
  await dbConnect();
  console.log(`Saving Build: ${id || "new"}`, data.title);
  try {
    if (id && id !== "new") {
      const result = await Build.findByIdAndUpdate(id, data, { new: true, upsert: true });
      console.log("Build updated/upserted:", result?._id);
    } else {
      const result = await Build.create(data);
      console.log("Build created:", result._id);
    }
    revalidatePath("/builds");
    revalidatePath("/");
    revalidatePath("/admin/builds");
  } catch (error) {
    console.error("Error saving build:", error);
    throw error;
  }
}

export async function deleteBuild(id: string) {
  await dbConnect();
  console.log("Deleting Build:", id);
  await Build.findByIdAndDelete(id);
  revalidatePath("/builds");
  revalidatePath("/");
  revalidatePath("/admin/builds");
}

export async function saveWriting(id: string | null, data: any) {
  await dbConnect();
  console.log(`Saving Writing: ${id || "new"}`, data.title);
  try {
    if (id && id !== "new") {
      const result = await Writing.findByIdAndUpdate(id, data, { new: true, upsert: true });
      console.log("Writing updated/upserted:", result?._id);
    } else {
      const result = await Writing.create(data);
      console.log("Writing created:", result._id);
    }
    revalidatePath("/writing");
    revalidatePath("/");
    revalidatePath("/admin/writing");
  } catch (error) {
    console.error("Error saving writing:", error);
    throw error;
  }
}

export async function deleteWriting(id: string) {
  await dbConnect();
  await Writing.findByIdAndDelete(id);
  revalidatePath("/writing");
  revalidatePath("/");
  revalidatePath("/admin/writing");
}

export async function updateNowPage(data: any) {
  await dbConnect();
  await NowPage.findOneAndUpdate({}, data, { upsert: true });
  revalidatePath("/now");
  revalidatePath("/admin/now");
}

export async function updateAboutPage(data: any) {
  await dbConnect();
  await AboutPage.findOneAndUpdate({}, data, { upsert: true });
  revalidatePath("/about");
  revalidatePath("/admin/about");
}
