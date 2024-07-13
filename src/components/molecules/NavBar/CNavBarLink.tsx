import ALink from "../../Atoms/ALink";

interface iCNavBarLink {
  className: string;
  linkText: string;
  href: string;
}

export default function CNavBarLink({
  className,
  linkText,
  href,
}: iCNavBarLink) {
  return (
    <ALink href={href}>
      <div
        className={
          "flex justify-center items-center w-fit h-[50px] min-w-[100px] px-5 py-3 text-white transition-all antialiased duration-500 " +
          " " +
          className
        }
      >
        <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{linkText}</p>
      </div>
    </ALink>
  );
}

CNavBarLink.displayName = "CNavBarLink";
