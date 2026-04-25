import React from "react";

export const FormInput = ({ 
  label, 
  name, 
  defaultValue, 
  type = "text", 
  placeholder,
  required = false 
}: { 
  label: string; 
  name: string; 
  defaultValue?: string | number; 
  type?: string;
  placeholder?: string;
  required?: boolean;
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-xs font-medium uppercase tracking-widest text-zinc-400">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      required={required}
      className="w-full bg-transparent border-b border-zinc-200 py-2 focus:border-zinc-900 outline-none font-light transition-colors placeholder:text-zinc-200"
    />
  </div>
);

export const FormTextarea = ({ 
  label, 
  name, 
  defaultValue, 
  placeholder,
  rows = 4 
}: { 
  label: string; 
  name: string; 
  defaultValue?: string; 
  placeholder?: string;
  rows?: number;
}) => (
  <div className="space-y-2">
    <label htmlFor={name} className="block text-xs font-medium uppercase tracking-widest text-zinc-400">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      rows={rows}
      className="w-full bg-transparent border border-zinc-200 p-4 focus:border-zinc-900 outline-none font-light transition-colors placeholder:text-zinc-200 resize-none"
    />
  </div>
);

export const SubmitButton = ({ 
  label = "Save Changes", 
  pendingLabel = "Saving..." 
}: { 
  label?: string; 
  pendingLabel?: string; 
}) => {
  // We'll use this inside forms with a special helper or just as a styled button
  return (
    <button
      type="submit"
      className="px-8 py-3 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors uppercase tracking-widest"
    >
      {label}
    </button>
  );
};
