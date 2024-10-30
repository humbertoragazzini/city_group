"use client";
import { ScrollScene, UseCanvas } from "@14islands/r3f-scroll-rig";
import { MeshDistortMaterial } from "@react-three/drei";
import { useLayoutEffect, useRef, useState } from "react";
// @ts-ignore
import { WebGLText } from "@14islands/r3f-scroll-rig/powerups";

interface iRTFAText {
  stickyElref: any;
  children: any;
  font: any;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size: any;
  className?: any;
}

export function RTFAText({
  stickyElref,
  children,
  font,
  as: Tag = "p",
  size,
  className,
}: iRTFAText) {
  const el = useRef<HTMLElement>(null);
  const [textNotNull, settextNotNull] = useState<any>(false);

  useLayoutEffect(() => {
    if (el.current !== null) {
      settextNotNull(true);
    }
  }, []);

  return (
    <>
      <Tag
        ref={el as React.RefObject<HTMLHeadingElement>}
        className={`opacity-0 text-${size} pb-16 w-full ${className}`}
      >
        {children}
      </Tag>
      {textNotNull && (
        <UseCanvas>
          <ScrollScene track={el as React.MutableRefObject<HTMLElement>}>
            {(props) => (
              <>
                <WebGLText
                  el={el} // getComputedStyle is called on this element
                  // font={font} // path to the typeface (*.woff)
                  glyphGeometryDetail={16} // needed for distortion to look good
                  {...props} // contains scale from the ScrollScene
                  color={"black"}
                >
                  <MeshDistortMaterial speed={1.4} distort={0.14} />
                  {children}
                </WebGLText>
              </>
            )}
          </ScrollScene>
        </UseCanvas>
      )}
    </>
  );
}
