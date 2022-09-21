import React from 'react'

const Name = ({
  className = 'fill-transparent stroke-black',
}: {
  className?: string
}) => (
  <svg
    className={className}
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.7675 13.8367C4.51618 12.8483 6.49132 12.3303 8.5 12.3333C10.5833 12.3333 12.5392 12.8792 14.2325 13.8367M11 7.33333C11 7.99637 10.7366 8.63226 10.2678 9.1011C9.79893 9.56994 9.16304 9.83333 8.5 9.83333C7.83696 9.83333 7.20107 9.56994 6.73223 9.1011C6.26339 8.63226 6 7.99637 6 7.33333C6 6.67029 6.26339 6.03441 6.73223 5.56557C7.20107 5.09673 7.83696 4.83333 8.5 4.83333C9.16304 4.83333 9.79893 5.09673 10.2678 5.56557C10.7366 6.03441 11 6.67029 11 7.33333ZM16 9C16 9.98491 15.806 10.9602 15.4291 11.8701C15.0522 12.7801 14.4997 13.6069 13.8033 14.3033C13.1069 14.9997 12.2801 15.5522 11.3701 15.9291C10.4602 16.306 9.48491 16.5 8.5 16.5C7.51509 16.5 6.53982 16.306 5.62987 15.9291C4.71993 15.5522 3.89314 14.9997 3.1967 14.3033C2.50026 13.6069 1.94781 12.7801 1.5709 11.8701C1.19399 10.9602 1 9.98491 1 9C1 7.01088 1.79018 5.10322 3.1967 3.6967C4.60322 2.29018 6.51088 1.5 8.5 1.5C10.4891 1.5 12.3968 2.29018 13.8033 3.6967C15.2098 5.10322 16 7.01088 16 9Z"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="black"
    />
  </svg>
)

export default Name