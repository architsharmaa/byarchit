import React from "react";
import { getSiteData } from "@/lib/data";
import { updateSiteConfig } from "@/lib/actions";
import { FormInput, FormTextarea, SubmitButton } from "@/components/admin/FormComponents";

export default async function SiteConfigAdmin() {
  const data = await getSiteData();
  const config = data.config;

  async function handleSubmit(formData: FormData) {
    "use server";
    const values = {
      heroHeading: formData.get("heroHeading"),
      heroSubtext: formData.get("heroSubtext"),
      heroImageUrl: formData.get("heroImageUrl"),
      heroImageAlt: formData.get("heroImageAlt"),
      contactEmail: formData.get("contactEmail"),
      // For now, keeping social links as they were or we can add fields
    };
    await updateSiteConfig(values);
  }

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">Site Configuration.</h1>
        <p className="text-sm text-zinc-500">Update global identity markers and hero content.</p>
      </header>

      <form action={handleSubmit} className="max-w-2xl space-y-10">
        <div className="grid grid-cols-1 gap-10">
          <FormInput 
            label="Hero Heading" 
            name="heroHeading" 
            defaultValue={config?.heroHeading} 
            required 
          />
          
          <FormTextarea 
            label="Hero Subtext" 
            name="heroSubtext" 
            defaultValue={config?.heroSubtext} 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormInput 
              label="Hero Image URL" 
              name="heroImageUrl" 
              defaultValue={config?.heroImageUrl} 
            />
            <FormInput 
              label="Image Alt Text" 
              name="heroImageAlt" 
              defaultValue={config?.heroImageAlt} 
            />
          </div>

          <FormInput 
            label="Contact Email" 
            name="contactEmail" 
            defaultValue={config?.contactEmail} 
          />
        </div>

        <div className="pt-8 flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}
