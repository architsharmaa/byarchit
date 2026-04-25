"use client";

import React, { useState } from "react";
import { saveWriting } from "@/lib/actions";
import { FormInput, FormTextarea } from "@/components/admin/FormComponents";
import { useRouter } from "next/navigation";

export default function WritingForm({ post }: { post?: any }) {
  const router = useRouter();
  const [base64Image, setBase64Image] = useState<string>(post?.imageUrl || "");

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
    console.log("Writing form submission started (onSubmit)...");
    const data = {
      title: formData.get("title"),
      slug: formData.get("slug") || formData.get("title")?.toString().toLowerCase().replace(/\s+/g, '-'),
      excerpt: formData.get("excerpt"),
      category: formData.get("category"),
      publishedAt: formData.get("publishedAt") ? new Date(formData.get("publishedAt") as string) : new Date(),
      imageUrl: base64Image || formData.get("imageUrl"),
      imageAlt: formData.get("imageAlt"),
      featured: formData.get("featured") === "on",
      content: formData.get("content"),
    };
    
    console.log("Submitting data to saveWriting:", data.title);
    try {
      await saveWriting(post?._id || null, data);
      console.log("saveWriting call completed successfully");
      router.push("/admin/writing");
      router.refresh();
    } catch (e) {
      console.error("FAILED to save article:", e);
      alert("Error saving article: " + (e as Error).message);
    }
  }

  const defaultDate = post?.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <FormInput label="Title" name="title" defaultValue={post?.title} required />
        <FormInput label="Slug" name="slug" defaultValue={post?.slug} placeholder="leave empty to auto-generate" />
        
        <FormInput label="Category" name="category" defaultValue={post?.category} placeholder="e.g. Essay, Thoughts" />
        <FormInput label="Publish Date" name="publishedAt" type="date" defaultValue={defaultDate} />
        
        <div className="md:col-span-2">
          <FormTextarea label="Excerpt" name="excerpt" defaultValue={post?.excerpt} rows={3} />
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
        <FormInput label="Image Alt" name="imageAlt" defaultValue={post?.imageAlt} />
        
        <div className="md:col-span-2">
          <FormTextarea label="Content (Markdown supported)" name="content" defaultValue={post?.content} rows={15} />
        </div>

        <div className="flex items-center space-x-8 md:col-span-2">
          <div className="space-y-2">
            <label className="block text-xs font-medium uppercase tracking-widest text-zinc-400">Featured</label>
            <input type="checkbox" name="featured" defaultChecked={post?.featured} className="w-5 h-5 accent-zinc-900" />
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
          Save Post
        </button>
      </div>
    </form>
  );
}
