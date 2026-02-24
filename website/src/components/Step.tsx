interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export default function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-semibold text-sm">
        {number}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-[var(--text-muted)] leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
