// @ts-nocheck
"use client";
import {
  ScrollScene,
  UseCanvas,
  useScrollRig,
  styles,
} from "@14islands/r3f-scroll-rig";
import { WebGLText } from "@14islands/r3f-scroll-rig/powerups";
import { MeshDistortMaterial } from "@react-three/drei";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { StickyScrollScene } from "@14islands/r3f-scroll-rig/powerups";

export function RTFAText({
  stickyElref,
  children,
  font,
  as: Tag = "p",
  size,
  className,
}) {
  const el = useRef();
  const [textNotNull, settextNotNull] = useState<any>(false);

  useLayoutEffect(() => {
    if (el.current !== null) {
      settextNotNull(true);
    }
  }, []);

  return (
    <>
      <Tag
        ref={el}
        className={`opacity-0 text-${size} pb-16 w-full ${className}`}
      >
        {children}
      </Tag>
      {textNotNull && (
        <UseCanvas>
          <ScrollScene track={el}>
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
