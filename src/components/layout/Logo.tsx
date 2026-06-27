import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  const mainText = dark ? "#ffffff" : "#062B5F";
  const proText = dark ? "#7AC943" : "#0F9F90";
  const mutedText = dark ? "#BDEBFF" : "#0A4A92";

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center", className)}
      aria-label={`${siteConfig.shortName} home`}
    >
      <svg
        viewBox="0 0 318 82"
        className="h-12 w-[188px] sm:h-14 sm:w-[214px]"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="logo-cross" x1="26" x2="96" y1="15" y2="67" gradientUnits="userSpaceOnUse">
            <stop stopColor="#19BDEB" />
            <stop offset="0.56" stopColor="#0A4A92" />
            <stop offset="1" stopColor="#7AC943" />
          </linearGradient>
          <linearGradient id="logo-swoosh" x1="12" x2="116" y1="61" y2="25" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7AC943" />
            <stop offset="0.58" stopColor="#14B8A6" />
            <stop offset="1" stopColor="#19BDEB" />
          </linearGradient>
        </defs>
        <g>
          <path
            d="M47.5 18.5h23.8c4.1 0 7.4 3.3 7.4 7.4v12.8h12.8c4.1 0 7.4 3.3 7.4 7.4v23.8c0 4.1-3.3 7.4-7.4 7.4H78.7v12.8c0 4.1-3.3 7.4-7.4 7.4H47.5c-4.1 0-7.4-3.3-7.4-7.4V77.3H27.3c-4.1 0-7.4-3.3-7.4-7.4V46.1c0-4.1 3.3-7.4 7.4-7.4h12.8V25.9c0-4.1 3.3-7.4 7.4-7.4Z"
            fill="url(#logo-cross)"
            opacity="0.96"
            transform="translate(0 -9)"
          />
          <path
            d="M14 60.5c21.5 9 59.2 8.7 91.3-25.8-21.4 43.5-67.2 51.4-94.7 39.9 5.8-1.8 10-6.3 12-12.6-3.1.2-6.1-.3-8.6-1.5Z"
            fill="url(#logo-swoosh)"
          />
          <path
            d="M88.8 17.4l4.1 8.4 9.3 1.4-6.7 6.5 1.6 9.2-8.3-4.4-8.3 4.4 1.6-9.2-6.7-6.5 9.3-1.4 4.1-8.4Z"
            fill="#19BDEB"
          />
        </g>
        <text
          x="116"
          y="42"
          fill={mainText}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="28"
          fontWeight="800"
        >
          Healthcare
        </text>
        <text
          x="116"
          y="66"
          fill={proText}
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="26"
          fontWeight="800"
        >
          Pro
        </text>
        <rect x="166" y="59" width="116" height="2.2" rx="1.1" fill={mutedText} opacity="0.38" />
      </svg>
    </Link>
  );
}
