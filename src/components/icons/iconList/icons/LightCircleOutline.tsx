import React from 'react'

const LightCircleOutline = ({ className }: { className?: string }) => (
  <svg
    width="67"
    height="66"
    viewBox="0 0 67 66"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect x="5.5" y="5" width="56" height="56" rx="28" fill="#D1BCFA" />
    <path
      d="M30 45.25L31.75 36.5L24.75 33.875L37 20.75L35.25 29.5L42.25 32.125L30 45.25Z"
      stroke="#851DFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="5.5"
      y="5"
      width="56"
      height="56"
      rx="28"
      stroke="#EFE7FD"
      strokeWidth="10"
    />
  </svg>
)
export default LightCircleOutline
