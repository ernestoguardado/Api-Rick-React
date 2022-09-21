import React from 'react'

const User = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 12.5C12.7614 12.5 15 10.2614 15 7.5C15 4.73858 12.7614 2.5 10 2.5C7.23858 2.5 5 4.73858 5 7.5C5 10.2614 7.23858 12.5 10 12.5Z"
      stroke="#1D2939"
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M2.42188 16.8752C3.18979 15.5449 4.2944 14.4401 5.62465 13.672C6.9549 12.9039 8.46392 12.4995 10 12.4995C11.5361 12.4995 13.0451 12.9039 14.3753 13.672C15.7056 14.4401 16.8102 15.5449 17.5781 16.8752"
      stroke="#1D2939"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default User
