interface TagBadgeProps {
  children: React.ReactNode;
}

export function TagBadge({ children }: TagBadgeProps) {
  return (
    <span className="bg-transparent border border-border text-text-muted font-mono text-[10px] py-[2px] px-1.5 rounded-[3px] inline-flex items-center">
      {children}
    </span>
  );
}
