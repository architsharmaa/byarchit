import React from "react";
import BuildForm from "../BuildForm";

export default function NewBuildPage() {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">New Project.</h1>
        <p className="text-sm text-zinc-500">Define a new build and its layout variant.</p>
      </header>

      <BuildForm />
    </div>
  );
}
