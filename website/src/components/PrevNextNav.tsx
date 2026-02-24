"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessons } from "@/lib/lessonNav";

export default function PrevNextNav() {
  const pathname = usePathname();
  const index = lessons.findIndex((l) => l.href === pathname);
  const prev = index > 0 ? lessons[index - 1] : null;
  const next = index < lessons.length - 1 ? lessons[index + 1] : null;

  if (!prev && !next) return null;

  return (
    <div className="flex justify-between items-center mt-12 pt-6 border-t border-[var(--border)]">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-teal transition-colors"
        >
          <span aria-hidden>←</span>
          <span>{prev.label}</span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-teal transition-colors"
        >
          <span>{next.label}</span>
          <span aria-hidden>→</span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
