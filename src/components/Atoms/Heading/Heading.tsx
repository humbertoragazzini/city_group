interface iHeading {
  text: string;
  level: number;
  theme: string;
  className: string;
}

export default function Heading({ text, level, theme, className }: iHeading) {
  return (
    <>
      {level == 1 && (
        <h1
          className={`text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5 ${className}`}
        >
          {text}
        </h1>
      )}
      {level == 2 && (
        <h2
          className={`text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5 ${className}`}
        >
          {text}
        </h2>
      )}
      {level == 3 && (
        <h3
          className={`text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5 ${className}`}
        >
          {text}
        </h3>
      )}
      {level == 4 && (
        <h4
          className={`text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5 ${className}`}
        >
          {text}
        </h4>
      )}
      {level == 5 && (
        <h5
          className={`text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5 ${className}`}
        >
          {text}
        </h5>
      )}
      {level == 6 && (
        <h6
          className={`text-5xl sm:text-[85px] sm:leading-[85px] md:text-[85px] md:leading-[110px] lg:text-[85px] lg:leading-[110px] font-semibold mb-5 ${className}`}
        >
          {text}
        </h6>
      )}
    </>
  );
}

Heading.displayName = "Heading";
