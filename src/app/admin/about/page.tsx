import React from "react";
import { getSiteData } from "@/lib/data";
import { updateAboutPage } from "@/lib/actions";
import { FormInput, FormTextarea, SubmitButton } from "@/components/admin/FormComponents";

export default async function AboutAdmin() {
  const data = await getSiteData();
  const about = data.about;

  async function handleSubmit(formData: FormData) {
    "use server";
    const values = {
      heading: formData.get("heading"),
      bio: formData.get("bio"),
      imageUrl: formData.get("imageUrl"),
      imageAlt: formData.get("imageAlt"),
      imageCaption: formData.get("imageCaption"),
      contactEmail: formData.get("contactEmail"),
      sections: JSON.parse(formData.get("sections") as string),
    };
    await updateAboutPage(values);
  }

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">About Page.</h1>
        <p className="text-sm text-zinc-500">Curate your professional and philosophical biography.</p>
      </header>

      <form action={handleSubmit} className="max-w-4xl space-y-10">
        <div className="grid grid-cols-1 gap-10">
          <FormInput label="Heading" name="heading" defaultValue={about?.heading} required />
          <FormTextarea label="Bio" name="bio" defaultValue={about?.bio} rows={6} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput label="Image URL" name="imageUrl" defaultValue={about?.imageUrl} />
            <FormInput label="Image Alt text" name="imageAlt" defaultValue={about?.imageAlt} />
            <FormInput label="Image Caption" name="imageCaption" defaultValue={about?.imageCaption} />
            <FormInput label="Contact Email" name="contactEmail" defaultValue={about?.contactEmail} />
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400">Sections (JSON format)</label>
            <p className="text-[10px] text-zinc-400 lowercase">Edit the structural sections of your biography.</p>
            <textarea
              name="sections"
              defaultValue={JSON.stringify(about?.sections, null, 2)}
              rows={20}
              className="w-full bg-zinc-900 text-zinc-100 p-6 font-mono text-xs focus:ring-0 outline-none rounded-sm"
            />
          </div>
        </div>

        <div className="pt-8 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
