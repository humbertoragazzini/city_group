export default function AButton({ children, onClickHandler }: any) {
  return <button onClick={(e) => onClickHandler()}>{children}</button>;
}

AButton.displayName = "AButton";
