import React from 'react'

const MiniCheckCircleApp = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="16" rx="8" fill="#5F14EF" />
    <path
      d="M10.75 6.25L7.25 9.75L5.5 8"
      stroke="#EAECF0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default MiniCheckCircleApp
