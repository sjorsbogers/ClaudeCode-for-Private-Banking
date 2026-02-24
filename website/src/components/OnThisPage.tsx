"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function OnThisPage() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const els = article.querySelectorAll("h2, h3");
    const list: Heading[] = Array.from(els).map((el) => {
      if (!el.id) {
        el.id = slugify(el.textContent || "");
      }
      return {
        id: el.id,
        text: el.textContent || "",
        level: parseInt(el.tagName[1]),
      };
    });
    setHeadings(list);

    if (list.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-64px 0px -70% 0px", threshold: 0 }
    );

    list.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="py-8 pr-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
        On This Page
      </p>
      <ul className="space-y-2">
        {headings.map(({ id, text, level }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm transition-colors leading-snug ${
                level === 3 ? "pl-3" : ""
              } ${
                activeId === id
                  ? "text-teal font-medium"
                  : "text-[var(--text-muted)] hover:text-teal"
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
