"use client";

import React, { useState } from "react";
import { saveBuild } from "@/lib/actions";
import { FormInput, FormTextarea } from "@/components/admin/FormComponents";
import { useRouter } from "next/navigation";

export default function BuildForm({ build }: { build?: any }) {
  const router = useRouter();
  const [base64Image, setBase64Image] = useState<string>(build?.imageUrl || "");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("Please upload an image smaller than 10MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Image(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Form submission started (onSubmit)...");
    const data = {
      title: formData.get("title"),
      slug: formData.get("slug") || formData.get("title")?.toString().toLowerCase().replace(/\s+/g, '-'),
      year: Number(formData.get("year")),
      category: formData.get("category"),
      description: formData.get("description"),
      imageUrl: base64Image || formData.get("imageUrl"),
      imageAlt: formData.get("imageAlt"),
      techStack: formData.get("techStack")?.toString().split(",").map(i => i.trim()).filter(Boolean),
      linkLabel: formData.get("linkLabel"),
      linkUrl: formData.get("linkUrl"),
      githubUrl: formData.get("githubUrl")?.toString() || "",
      designDocUrl: formData.get("designDocUrl")?.toString() || "",
      featured: formData.get("featured") === "on",
      displayOrder: Number(formData.get("displayOrder")),
      layout: formData.get("layout"),
      content: formData.get("content"),
    };
    
    console.log("Submitting data to saveBuild:", data.title);
    try {
      await saveBuild(build?._id || null, data);
      console.log("saveBuild call completed successfully");
      router.push("/admin/builds");
      router.refresh();
    } catch (e) {
      console.error("FAILED to save project:", e);
      alert("Error saving project: " + (e as Error).message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FormInput label="Title" name="title" defaultValue={build?.title} required />
        <FormInput label="Slug" name="slug" defaultValue={build?.slug} placeholder="leave empty to auto-generate" />
        
        <FormInput label="Year" name="year" type="number" defaultValue={build?.year || new Date().getFullYear()} />
        <FormInput label="Category" name="category" defaultValue={build?.category} placeholder="e.g. Software, Hardware" />
        
        <div className="md:col-span-2">
          <FormTextarea label="Description" name="description" defaultValue={build?.description} />
        </div>

        <div className="space-y-2">
          <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400">Image (URL or Upload)</label>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="imageUrl"
              value={base64Image}
              onChange={(e) => setBase64Image(e.target.value)}
              placeholder="https://... or upload file"
              className="w-full bg-transparent border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none font-light transition-colors placeholder:text-zinc-200 text-sm overflow-hidden text-ellipsis whitespace-nowrap"
            />
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageUpload}
              className="text-xs file:mr-4 file:py-2 file:px-4 file:border-0 file:text-xs file:uppercase file:tracking-widest file:font-medium file:bg-zinc-100 file:text-zinc-600 hover:file:bg-zinc-200 transition-colors cursor-pointer"
            />
          </div>
        </div>
        <FormInput label="Image Alt" name="imageAlt" defaultValue={build?.imageAlt} />
        
        <FormInput label="Tech Stack" name="techStack" defaultValue={build?.techStack?.join(", ")} placeholder="React, Three.js, etc." />
        <FormInput label="Display Order" name="displayOrder" type="number" defaultValue={build?.displayOrder || 0} />

        <FormInput label="Link Label" name="linkLabel" defaultValue={build?.linkLabel} />
        <FormInput label="Link URL" name="linkUrl" defaultValue={build?.linkUrl} />
        
        <div className="md:col-span-1">
          <FormInput label="GitHub URL" name="githubUrl" defaultValue={build?.githubUrl} placeholder="https://github.com/..." />
        </div>
        
        <div className="md:col-span-1">
          <FormInput label="Design Doc URL" name="designDocUrl" defaultValue={build?.designDocUrl} placeholder="https://docs.google.com/..." />
        </div>
        
        <div className="md:col-span-2">
          <FormTextarea label="Full Article / Content (Markdown supported)" name="content" defaultValue={build?.content} rows={15} />
        </div>

        <div className="flex items-center space-x-8 md:col-span-2">
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400">Featured</label>
            <input type="checkbox" name="featured" defaultChecked={build?.featured} className="w-5 h-5 accent-zinc-900" />
          </div>

          <div className="space-y-2 flex-1">
            <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400">Layout Variant</label>
            <select name="layout" defaultValue={build?.layout || "asymmetric"} className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none font-light">
              <option value="asymmetric">Asymmetric (Standard)</option>
              <option value="editorial">Editorial (Text focus)</option>
              <option value="fullbleed">Full Bleed (Image focus)</option>
              <option value="list">List Item (Footer)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="pt-12 flex justify-end space-x-4">
        <button 
          type="button" 
          onClick={() => router.back()}
          className="px-8 py-3 text-sm font-medium uppercase tracking-widest hover:text-zinc-500 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors uppercase tracking-widest"
        >
          Save Project
        </button>
      </div>
    </form>
  );
}
