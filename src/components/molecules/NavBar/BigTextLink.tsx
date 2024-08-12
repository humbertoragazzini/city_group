"use client";
import ALink from "../../Atoms/Links/ALink";

interface iBigTextLink {
  className: string;
  linkText: string;
  href: string;
  order: string;
}

export default function BigTextLink({
  className,
  linkText,
  href,
  order,
}: iBigTextLink) {
  return (
    <ALink href={href}>
      <div
        className={
          "flex justify-center items-center w-fit h-fit min-w-[100px] p-2 lg:p-5 transition-all antialiased duration-500 text-gray-600 hover:text-white hover:scale-110 origin-center origin-left " +
          " " +
          className
        }
      >
        <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-6xl lg:text-[130px] lg:leading-[130px] xl:text-[180px] xl:leading-[170px] flex justify-start items-center">
          <span className="text-2xl mr-5">({order})</span>
          {linkText}
        </p>
      </div>
    </ALink>
  );
}

BigTextLink.displayName = "BigTextLink";
