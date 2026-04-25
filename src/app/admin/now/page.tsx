import React from "react";
import { getSiteData } from "@/lib/data";
import { updateNowPage } from "@/lib/actions";
import { FormInput, FormTextarea, SubmitButton } from "@/components/admin/FormComponents";

export default async function NowAdmin() {
  const data = await getSiteData();
  const now = data.now;

  async function handleSubmit(formData: FormData) {
    "use server";
    const values = {
      intro: {
        heading: formData.get("introHeading"),
        body: formData.get("introBody"),
      },
      imageUrl: formData.get("imageUrl"),
      imageAlt: formData.get("imageAlt"),
      sections: JSON.parse(formData.get("sections") as string),
    };
    await updateNowPage(values);
  }

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">Now Page.</h1>
        <p className="text-sm text-zinc-500">Update your current focus and intentions.</p>
      </header>

      <form action={handleSubmit} className="max-w-4xl space-y-10">
        <div className="grid grid-cols-1 gap-10">
          <FormInput label="Heading" name="introHeading" defaultValue={now?.intro?.heading} required />
          <FormTextarea label="Introduction" name="introBody" defaultValue={now?.intro?.body} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput label="Image URL" name="imageUrl" defaultValue={now?.imageUrl} />
            <FormInput label="Image Alt text" name="imageAlt" defaultValue={now?.imageAlt} />
          </div>

          <div className="space-y-4">
            <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400">Sections (JSON format)</label>
            <p className="text-[10px] text-zinc-400 lowercase">Edit the raw structure of your now sections below.</p>
            <textarea
              name="sections"
              defaultValue={JSON.stringify(now?.sections, null, 2)}
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
