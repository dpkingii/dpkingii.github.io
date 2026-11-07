"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Next.js doesn't scroll when a link points at the page you're already on, so do it here.
export default function NavLink(props: React.ComponentProps<typeof Link> & { href: string }) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      onClick={() => {
        if (props.href === pathname) window.scrollTo({ top: 0 });
      }}
    />
  );
}
