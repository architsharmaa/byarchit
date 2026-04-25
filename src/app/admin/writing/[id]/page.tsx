import React from "react";
import WritingForm from "../WritingForm";
import { getWritingById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EditWritingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getWritingById(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">Edit Post.</h1>
        <p className="text-sm text-zinc-500 italic lowercase tracking-tight">"{post.title}"</p>
      </header>

      <WritingForm post={post} />
    </div>
  );
}
