import Link from "next/link";

export default function ALink({ children, href }: any) {
  return <Link href={href}>{children}</Link>;
}

ALink.displayName = "ALink";
