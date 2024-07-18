import Link from "next/link";

export default function ALink({ children, href, className }: any) {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

ALink.displayName = "ALink";
