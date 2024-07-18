export default function Paragraph({ children, type }: any) {
  return (
    <>
      {type == "body" && <p className="text-base">{children}</p>}
      {type == "standfirst" && (
        <p className="text-2xl sm:text-4xl mb-5">{children}</p>
      )}
      {type == "standfirst2" && (
        <p className="mb-5 text-lg sm:text-2xl">{children}</p>
      )}
    </>
  );
}

Paragraph.displayName = "Paragraph";
