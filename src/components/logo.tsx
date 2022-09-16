import * as React from 'react';

export interface TMToolsLogoProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export function TMToolsLogo({ height = 32, color = '#fff', ...props }: TMToolsLogoProps) {
  return (
    <svg
      height={height}
      viewBox="0 0 100 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M18.686 0L37.16 32H.211L18.686 0z" fill="url(#paint0_linear_1977_30)" />
      <circle cx={49} cy={16} r={16} fill="url(#paint1_linear_1977_30)" />
      <path fill="url(#paint2_linear_1977_30)" d="M67 0H99V32H67z" />
      <defs>
        <linearGradient
          id="paint0_linear_1977_30"
          x1={-3.99165e-7}
          y1={16}
          x2={37}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset={1} stopColor={color} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1977_30"
          x1={33}
          y1={16}
          x2={65}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset={1} stopColor={color} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1977_30"
          x1={67}
          y1={16}
          x2={99}
          y2={16}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} />
          <stop offset={1} stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
}
