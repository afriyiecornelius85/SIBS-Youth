type ImagePlaceholderProps = {
  label: string;
  aspect?: "square" | "wide" | "tall";
};

export default function ImagePlaceholder({ label, aspect = "wide" }: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder aspect-${aspect}`} role="img" aria-label={label}>
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="4" y="8" width="40" height="32" rx="4" />
        <circle cx="17" cy="19" r="4" />
        <path d="M4 34l11-11 8 8 7-7 14 14" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
