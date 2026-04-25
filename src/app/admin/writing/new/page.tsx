import React from "react";
import WritingForm from "../WritingForm";

export default function NewWritingPage() {
  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-4">
        <h1 className="text-3xl font-light tracking-tight">New Writing.</h1>
        <p className="text-sm text-zinc-500">Draft a new post or essay.</p>
      </header>

      <WritingForm />
    </div>
  );
}
