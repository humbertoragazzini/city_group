import ALink from "@/components/Atoms/Links/ALink";

type Link = {
  href: string;
  text: string;
};

interface iJumpLinks {
  section: string;
  className: string;
  links: Link[];
}

export default function JumpLinks({ section, className, links }: iJumpLinks) {
  return (
    <>
      <div
        className={`subLinksContainer hidden xl:block h-fit min-w-[450px] ${className} ${section}`}
      >
        <ul className="relative">
          {links.map((link: Link, i: number) => {
            return (
              <li
                key={link.text + i}
                className="text-4xl m-4 text-gray-600 text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] hover:text-white"
              >
                <ALink href={link.href}>{link.text}</ALink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

JumpLinks.displayName = "JumpLinks";
