import React from "react";
import BuildForm from "../BuildForm";
import { getBuildById } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function EditBuildPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const build = await getBuildById(id);

  if (!build) {
    notFound();
  }

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">Edit Project.</h1>
        <p className="text-sm text-zinc-500 tracking-wide lowercase">{build.title}</p>
      </header>

      <BuildForm build={build} />
    </div>
  );
}
