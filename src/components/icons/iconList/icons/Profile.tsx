import React from 'react'

const Profile = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2 15C15.5137 15 18.2 12.3137 18.2 9C18.2 5.68629 15.5137 3 12.2 3C8.88624 3 6.19995 5.68629 6.19995 9C6.19995 12.3137 8.88624 15 12.2 15Z"
      stroke="slate-200"
      strokeWidth="2"
      stroke-miterlimit="10"
    />
    <path
      d="M3.1062 20.2499C4.0277 18.6534 5.35323 17.3277 6.94953 16.406C8.54583 15.4843 10.3567 14.999 12.2 14.999C14.0432 14.999 15.8541 15.4843 17.4504 16.406C19.0467 17.3277 20.3722 18.6534 21.2937 20.2499"
      stroke="slate-200"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Profile
