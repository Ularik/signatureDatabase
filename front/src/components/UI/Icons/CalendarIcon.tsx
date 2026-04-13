import { createSvgIcon } from "@mui/material/utils";

// 1. Вызываем функцию
const CalendarIcon = createSvgIcon(
  // Первый аргумент: содержимое SVG (обычно теги <path>, <circle> и т.д.)
  <svg
    width="22"
    height="24"
    viewBox="0 0 22 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.33337 2V6"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6666 2V6"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.4167 4H4.58333C3.57081 4 2.75 4.89543 2.75 6V20C2.75 21.1046 3.57081 22 4.58333 22H17.4167C18.4292 22 19.25 21.1046 19.25 20V6C19.25 4.89543 18.4292 4 17.4167 4Z"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.75 10H19.25"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.25 16L10.0833 18L13.75 14"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>,

  // Второй аргумент: Имя компонента
  "CalendarIcon",
);

export default CalendarIcon;
