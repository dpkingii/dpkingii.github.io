"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Next.js doesn't scroll when a link points at the page you're already on, so do it here.
export default function NavLink(props: React.ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  const current = props.href === pathname;
  return (
    <Link
      {...props}
      aria-current={current ? "page" : undefined}
      onClick={() => {
        if (current) window.scrollTo({ top: 0 });
      }}
    />
  );
}
