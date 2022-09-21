import React from 'react'

const Messages = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.3126 13.5L3.6001 16.5V4.5C3.6001 4.30109 3.67912 4.11032 3.81977 3.96967C3.96042 3.82902 4.15119 3.75 4.3501 3.75H16.3501C16.549 3.75 16.7398 3.82902 16.8804 3.96967C17.0211 4.11032 17.1001 4.30109 17.1001 4.5V12.75C17.1001 12.9489 17.0211 13.1397 16.8804 13.2803C16.7398 13.421 16.549 13.5 16.3501 13.5H7.3126Z"
      stroke="slate-200"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.1001 13.5V17.25C8.1001 17.4489 8.17912 17.6397 8.31977 17.7803C8.46042 17.921 8.65119 18 8.8501 18H17.8876L21.6001 21V9C21.6001 8.80109 21.5211 8.61032 21.3804 8.46967C21.2398 8.32902 21.049 8.25 20.8501 8.25H17.1001"
      stroke="slate-200"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Messages
