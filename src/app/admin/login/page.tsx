"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-zinc-50 font-sans text-zinc-900 selection:bg-zinc-200">
      <div className="w-full max-w-sm space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl font-light tracking-tight">Admin login.</h1>
          <p className="text-sm text-zinc-500">Enter the system password.</p>
        </div>

        <form action={formAction} className="space-y-6">
          <div className="space-y-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoFocus
              className="w-full px-0 py-2 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors placeholder:text-zinc-300"
            />
            {state?.error && (
              <p className="text-xs text-red-500 lowercase">{state.error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="group flex items-center space-x-2 text-sm font-medium hover:text-zinc-500 transition-colors disabled:opacity-50"
          >
            <span>{isPending ? "Authenticating..." : "Enter workspace"}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>

        <div className="pt-12">
          <a href="/" className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors">
            Return to thinking space.
          </a>
        </div>
      </div>
    </main>
  );
}
