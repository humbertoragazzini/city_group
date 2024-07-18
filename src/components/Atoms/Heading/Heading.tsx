interface iHeading {
  text: string;
  level: number;
  theme: string;
  className: string;
}

export default function JumpLinks({ text, level, theme }: iHeading) {
  return (
    <>
      {level == 1 && <h1>text</h1>}
      {level == 2 && <h1>text</h1>}
      {level == 3 && <h1>text</h1>}
      {level == 4 && <h1>text</h1>}
      {level == 5 && <h1>text</h1>}
      {level == 6 && <h1>text</h1>}
    </>
  );
}

JumpLinks.displayName = "JumpLinks";
