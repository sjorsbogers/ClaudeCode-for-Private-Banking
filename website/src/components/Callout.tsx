interface CalloutProps {
  type: "tip" | "warning" | "keyboard" | "info";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  tip: {
    border: "border-teal",
    bg: "bg-teal/5",
    icon: "💡",
    defaultTitle: "Tip",
  },
  warning: {
    border: "border-amber-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    icon: "⚠️",
    defaultTitle: "Important",
  },
  keyboard: {
    border: "border-[var(--border)]",
    bg: "bg-[var(--bg-subtle)]",
    icon: "⌨️",
    defaultTitle: "Keyboard Shortcut",
  },
  info: {
    border: "border-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    icon: "ℹ️",
    defaultTitle: "Note",
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const s = styles[type];
  return (
    <div className={`border-l-4 ${s.border} ${s.bg} p-4 rounded-r-lg my-6`}>
      <p className="font-semibold mb-1">
        {s.icon} {title || s.defaultTitle}
      </p>
      <div className="text-[var(--text-muted)] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
