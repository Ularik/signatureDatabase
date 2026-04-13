import { createSvgIcon } from "@mui/material/utils";

const UrlIcon = createSvgIcon(
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17V9C1 6.87827 1.75857 4.84344 3.10883 3.34315C4.45909 1.84286 6.29044 1 8.2 1H17.8C19.7096 1 21.5409 1.84286 22.8912 3.34315C24.2414 4.84344 25 6.87827 25 9V17C25 19.1217 24.2414 21.1566 22.8912 22.6569C21.5409 24.1571 19.7096 25 17.8 25H8.2C6.29044 25 4.45909 24.1571 3.10883 22.6569C1.75857 21.1566 1 19.1217 1 17Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* Буквы URL */}
    <path
      d="M7 10V14C7 15.1 7.9 16 9 16C10.1 16 11 15.1 11 14V10M13 16V10H16C16.5 10 17 10.5 17 11V12C17 12.5 16.5 13 16 13H13M15 13L17 16M19 10V16H22"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  "UrlIcon",
);

export default UrlIcon;