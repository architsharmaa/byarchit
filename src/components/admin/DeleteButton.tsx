"use client";

import React from "react";

interface DeleteButtonProps {
  action: (id: string) => Promise<void>;
  id: string;
  label?: string;
  confirmMessage?: string;
}

export default function DeleteButton({ 
  action, 
  id, 
  label = "Delete", 
  confirmMessage = "Are you sure?" 
}: DeleteButtonProps) {
  return (
    <form 
      action={() => {
        if (window.confirm(confirmMessage)) {
          action(id);
        }
      }}
    >
      <button 
        type="submit"
        className="text-xs font-medium uppercase tracking-widest text-red-300 hover:text-red-600 transition-colors"
      >
        {label}
      </button>
    </form>
  );
}
