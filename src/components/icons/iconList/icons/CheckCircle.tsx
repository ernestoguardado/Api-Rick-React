import React from 'react'

const CheckCircle = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45 60L55 70L75 50M105 60C105 65.9095 103.836 71.7611 101.575 77.2208C99.3131 82.6804 95.9984 87.6412 91.8198 91.8198C87.6412 95.9984 82.6804 99.3131 77.2208 101.575C71.7611 103.836 65.9095 105 60 105C54.0905 105 48.2389 103.836 42.7792 101.575C37.3196 99.3131 32.3588 95.9984 28.1802 91.8198C24.0016 87.6412 20.6869 82.6804 18.4254 77.2208C16.164 71.7611 15 65.9095 15 60C15 48.0653 19.7411 36.6193 28.1802 28.1802C36.6193 19.7411 48.0653 15 60 15C71.9347 15 83.3807 19.7411 91.8198 28.1802C100.259 36.6193 105 48.0653 105 60Z"
      stroke="#31C48D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default CheckCircle
