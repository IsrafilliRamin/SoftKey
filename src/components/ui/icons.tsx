import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function KeyLogoIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="14.5" r="4.5" />
      <path d="M11.2 11.3 19 3.5" />
      <path d="M16.2 6.5 19 3.5l2.5 2.5-3 3" />
      <path d="M14.5 8.2 17 10.7" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z" />
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
      <path d="M2.5 3h2l2.2 12.1a2 2 0 0 0 2 1.65h8.1a2 2 0 0 0 1.97-1.65L20.5 7.5H6.1" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m20 20-4.35-4.35" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" {...props}>
      <path d="M12 3.5 14.9 9l6.1.9-4.4 4.3 1 6.1L12 17.4 6.4 20.3l1-6.1L3 9.9 9.1 9Z" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 12 5.5 5.5L20 7" />
    </svg>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12.5 2 4 14h6l-1.5 8L20 10h-6l-1.5-8Z" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
      <path d="M12 14.5v3" />
    </svg>
  );
}

export function HeadsetIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4.5" height="6.5" rx="1.6" />
      <rect x="16.5" y="13" width="4.5" height="6.5" rx="1.6" />
      <path d="M18.5 19.5a4 4 0 0 1-4 3.5h-2" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 19 6v6c0 4.6-3 7.9-7 8.8-4-.9-7-4.2-7-8.8V6Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function WindowsIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 5.5 10.5 4.4V11H3ZM11.5 4.3 21 3v8H11.5ZM3 12h7.5v6.6L3 17.5ZM11.5 12H21v8l-9.5-1.3Z" />
    </svg>
  );
}

export function OfficeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="3.2" width="7.6" height="7.6" rx="1.3" />
      <rect x="13.2" y="3.2" width="7.6" height="7.6" rx="1.3" />
      <rect x="3.2" y="13.2" width="7.6" height="7.6" rx="1.3" />
      <rect x="13.2" y="13.2" width="7.6" height="7.6" rx="1.3" />
    </svg>
  );
}

export function BrushIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M15.5 3.5c2 0 3.5 1.5 3.5 3.4 0 2.4-2.4 3.6-4.6 5.8-1 1-1.6 2-1.9 3.2" />
      <path d="M12.5 15.9c-.5 1.9-2 3.5-4.3 3.9-1.6.3-3.3-.1-4.7-1 .9-.7 1-1.9.8-3-.3-1.9 1-3.7 2.9-4.1 1.7-.4 3.4.4 4.3 1.9" />
    </svg>
  );
}

export function GamepadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="7.5" width="19" height="10" rx="5" />
      <path d="M7 10.3v3.4M5.3 12h3.4" />
      <circle cx="16" cy="10.8" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="18" cy="13.2" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloudIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7.5 18.5a4.2 4.2 0 0 1-.6-8.35 5.5 5.5 0 0 1 10.6-1.9 4 4 0 0 1-.6 10.25Z" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20c1-3.8 4-5.8 7.5-5.8s6.5 2 7.5 5.8" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16M13 5l7 7-7 7" />
    </svg>
  );
}

export const categoryIconMap = {
  windows: WindowsIcon,
  office: OfficeIcon,
  shield: ShieldIcon,
  brush: BrushIcon,
  gamepad: GamepadIcon,
  cloud: CloudIcon,
};