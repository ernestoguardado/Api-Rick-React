import React from 'react'

const LockClosedOutline = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 75V85M30 105H90C92.6522 105 95.1957 103.946 97.0711 102.071C98.9464 100.196 100 97.6522 100 95V65C100 62.3478 98.9464 59.8043 97.0711 57.9289C95.1957 56.0536 92.6522 55 90 55H30C27.3478 55 24.8043 56.0536 22.9289 57.9289C21.0536 59.8043 20 62.3478 20 65V95C20 97.6522 21.0536 100.196 22.9289 102.071C24.8043 103.946 27.3478 105 30 105ZM80 55V35C80 29.6957 77.8929 24.6086 74.1421 20.8579C70.3914 17.1071 65.3043 15 60 15C54.6957 15 49.6086 17.1071 45.8579 20.8579C42.1071 24.6086 40 29.6957 40 35V55H80Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default LockClosedOutline
