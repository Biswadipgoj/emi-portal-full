'use client';

import { useRef } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  loading?: boolean;
}

export default function SearchInput({ value, onChange, placeholder = 'Search name / IMEI / Aadhaar…', loading }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div className="relative">
      {/* Search icon */}
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none">
        {loading
          ? <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 010 20"/></svg>
          : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        }
      </div>
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="input pl-10 pr-10 py-3 text-base shadow-sm"
        autoFocus
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode="search"
      />
      {value && (
        <button
          onClick={() => { onChange(''); ref.current?.focus(); }}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      )}
    </div>
  );
}
