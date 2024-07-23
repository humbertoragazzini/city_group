"use client";
import Paragraph from "@/components/Atoms/Paragraph/Paragraph";
import { useAppContext } from "@/context/AppContext";
import { useState } from "react";

export default function Language() {
  const { state, setState } = useAppContext();
  const [language, setLanguage] = useState<number>(0);
  const allLanguages = ["EN", "ES", "CH", "IT"];

  const handleClick = () => {
    if (language < 3) {
      setLanguage(language + 1);
    } else {
      setLanguage(0);
    }
    setState((prevState: any) => ({
      ...prevState,
      language: allLanguages[language],
    }));
  };

  return (
    <div
      className="fixed h-[60px] top-4 transition-all duration-700 flex flex-row justify-center items-center p-3 bg-[rgba(17,31,42,0.7)] backdrop-blur-lg right-0 cursor-pointer"
      style={{ borderRadius: "60px 0px 0px 60px" }}
      onClick={() => {
        handleClick();
      }}
    >
      <button className="relative w-[35px] h-[35px] rounded-full">
        {state.language == "EN" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="absolute top-0 left-0 w-[35px] h-auto"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 88.35 57.052 c 0.034 -0.123 0.076 -0.243 0.109 -0.367 l -0.004 -0.002 C 89.457 52.957 90 49.043 90 45 c 0 -4.033 -0.54 -7.938 -1.538 -11.657 l 0.004 -0.002 c -0.039 -0.146 -0.088 -0.289 -0.128 -0.434 c -0.137 -0.492 -0.28 -0.982 -0.434 -1.468 c -0.081 -0.257 -0.167 -0.512 -0.253 -0.768 c -0.073 -0.217 -0.139 -0.437 -0.215 -0.653 h -0.015 c -1.645 -4.653 -4.021 -8.96 -7.01 -12.768 L 59.997 27.458 V 2.57 c -4.368 -1.544 -9.046 -2.427 -13.915 -2.542 h -2.164 c -4.868 0.115 -9.545 0.998 -13.913 2.541 v 24.889 L 9.589 17.249 c -2.989 3.809 -5.366 8.116 -7.01 12.769 H 2.564 c -0.076 0.216 -0.143 0.436 -0.216 0.653 c -0.086 0.255 -0.172 0.509 -0.253 0.765 c -0.154 0.486 -0.297 0.977 -0.434 1.47 c -0.04 0.145 -0.089 0.287 -0.128 0.432 l 0.004 0.002 C 0.54 37.061 0 40.966 0 45 c 0 4.043 0.543 7.957 1.545 11.684 l -0.004 0.002 c 0.033 0.123 0.074 0.242 0.108 0.365 c 0.146 0.524 0.298 1.046 0.462 1.562 c 0.075 0.236 0.154 0.47 0.233 0.705 c 0.077 0.231 0.148 0.464 0.229 0.693 H 2.59 c 1.647 4.651 4.025 8.955 7.016 12.761 l 20.4 -10.2 v 24.86 C 34.697 89.089 39.741 90 45 90 c 5.26 0 10.305 -0.911 14.997 -2.57 V 62.572 l 20.398 10.199 c 2.991 -3.806 5.368 -8.11 7.015 -12.76 h 0.015 c 0.081 -0.229 0.152 -0.463 0.23 -0.694 c 0.079 -0.234 0.158 -0.468 0.233 -0.704 C 88.052 58.096 88.205 57.575 88.35 57.052 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(243,244,245)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 53.999 0.902 c -2.565 -0.521 -5.213 -0.81 -7.917 -0.874 h -2.164 c -2.703 0.064 -5.35 0.354 -7.914 0.874 v 35.116 H 0.899 C 0.311 38.92 0 41.924 0 45 c 0 3.087 0.312 6.1 0.904 9.012 h 35.1 v 35.087 C 38.911 89.689 41.919 90 45 90 c 3.082 0 6.091 -0.311 8.999 -0.902 V 54.012 h 35.097 C 89.688 51.1 90 48.087 90 45 c 0 -3.076 -0.311 -6.08 -0.899 -8.983 H 53.999 V 0.902 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(204,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 85.242 65.135 c 0.829 -1.653 1.56 -3.363 2.184 -5.125 H 74.993 L 85.242 65.135 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(204,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 82.216 19.701 L 61.581 30.019 h 13.412 l 10.261 -5.131 C 84.353 23.088 83.341 21.354 82.216 19.701 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(204,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 4.747 24.887 c -0.829 1.655 -1.559 3.368 -2.182 5.132 H 15.01 L 4.747 24.887 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(204,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 7.8 70.321 L 28.422 60.01 H 15.01 L 4.758 65.136 C 5.661 66.936 6.674 68.67 7.8 70.321 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(204,0,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 9.605 72.771"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 80.412 17.251"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 80.395 72.77"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 9.589 17.25"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 9.589 17.249 l 20.416 10.208 v -3.99 V 2.584 C 21.874 5.458 14.813 10.593 9.589 17.249 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 59.997 2.585 v 22.302 v 2.57 L 80.411 17.25 C 75.188 10.594 68.128 5.459 59.997 2.585 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 30.006 72.77 V 62.572 l -20.4 10.2 c 5.222 6.646 12.276 11.774 20.4 14.646 V 72.77 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 59.997 62.572 v 9.296 v 15.548 c 8.123 -2.872 15.176 -8 20.398 -14.646 L 59.997 62.572 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,0,102)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
            </g>
          </svg>
        )}
        {state.language == "ES" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="absolute top-0 left-0 w-[35px] h-auto"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 0 45 c 0 8.199 2.202 15.88 6.034 22.5 h 77.932 C 87.798 60.88 90 53.199 90 45 c 0 -8.199 -2.202 -15.88 -6.034 -22.5 H 6.034 C 2.202 29.12 0 36.801 0 45 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,196,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 83.966 22.5 c -0.269 -0.465 -0.546 -0.926 -0.831 -1.381 C 75.176 8.438 61.077 0 45 0 c -8.201 0 -15.881 2.205 -22.5 6.04 c -6.357 3.682 -11.736 8.867 -15.635 15.08 C 6.58 21.574 6.304 22.035 6.034 22.5 H 83.966 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(198,11,30)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 6.034 67.5 c 0.269 0.465 0.546 0.926 0.831 1.38 c 3.899 6.213 9.278 11.397 15.635 15.08 C 29.119 87.795 36.799 90 45 90 c 16.077 0 30.176 -8.438 38.135 -21.12 c 0.285 -0.455 0.562 -0.915 0.831 -1.38 H 6.034 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(198,11,30)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
            </g>
          </svg>
        )}
        {state.language == "CH" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="absolute top-0 left-0 w-[35px] h-auto"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <circle
                cx="45"
                cy="45"
                r="45"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(222,41,16)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <polygon
                points="25.78,27.66 22.93,18.9 20.09,27.66 10.85,27.66 18.32,33.09 15.47,41.87 22.93,36.44 30.4,41.87 27.55,33.09 35.02,27.66"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,222,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <polygon
                points="43.5,20.39 45.09,23.03 45.36,19.96 48.36,19.27 45.53,18.07 45.8,15 43.78,17.32 40.95,16.12 42.53,18.76 40.51,21.07"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,222,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <polygon
                points="51.81,31.5 53.25,28.77 56.29,29.3 54.14,27.09 55.58,24.38 52.82,25.73 50.67,23.52 51.11,26.57 48.35,27.92 51.38,28.45"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,222,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <polygon
                points="54.1,40.5 56.52,38.6 53.45,38.71 52.39,35.82 51.54,38.78 48.48,38.89 51.02,40.6 50.17,43.56 52.6,41.67 55.15,43.39"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,222,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
              <polygon
                points="45.43,47.63 45.57,44.56 43.65,46.96 40.77,45.88 42.46,48.44 40.54,50.85 43.51,50.03 45.2,52.61 45.34,49.53 48.31,48.72"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(255,222,0)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
              />
            </g>
          </svg>
        )}
        {state.language == "IT" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="256"
            height="256"
            viewBox="0 0 256 256"
            xmlSpace="preserve"
            className="absolute top-0 left-0 w-[35px] h-auto"
          >
            <defs></defs>
            <g
              style={{
                stroke: "none",
                strokeWidth: 0,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                fill: "none",
                fillRule: "nonzero",
                opacity: 1,
              }}
              transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
            >
              <path
                d="M 60 2.571 v 84.859 c 17.466 -6.175 29.985 -22.818 30 -42.396 v -0.068 C 89.985 25.389 77.465 8.745 60 2.571 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(206,43,55)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 30 87.429 V 2.571 C 12.524 8.75 0 25.408 0 45 S 12.524 81.25 30 87.429 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(0,146,70)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
              <path
                d="M 30 87.429 C 34.693 89.088 39.739 90 45 90 c 5.261 0 10.307 -0.911 15 -2.571 V 2.571 C 55.307 0.911 50.261 0 45 0 c -5.261 0 -10.307 0.912 -15 2.571 V 87.429 z"
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "rgb(243,244,245)",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="matrix(1 0 0 1 0 0)"
                strokeLinecap="round"
              />
            </g>
          </svg>
        )}
      </button>
      <Paragraph
        type="body"
        className="ml-4 min-w-[20px] text-white"
        text={[
          {
            language: "EN",
            content: "EN",
          },
          {
            language: "ES",
            content: "ES",
          },
          {
            language: "CH",
            content: "CH",
          },
          {
            language: "IT",
            content: "IT",
          },
        ]}
      ></Paragraph>
    </div>
  );
}

Language.displayName = "Language";
