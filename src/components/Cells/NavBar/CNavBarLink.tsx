import ALink from "../../Atoms/ALink";

export default function CNavBarLink({ className, linkText, href }: any) {
  return (
    <ALink href={href}>
      <div
        className={
          "flex justify-center items-center w-fit h-fit rounded-full min-w-[100px] px-5 py-3 the-black hover:bg-the-red hover:text-white " +
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
