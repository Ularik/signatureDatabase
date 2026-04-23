import { createSvgIcon } from "@mui/material/utils";

// 1. Вызываем функцию
const ArrowIcon = createSvgIcon(
  // Первый аргумент: содержимое SVG (обычно теги <path>, <circle> и т.д.)
  <svg
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 13.3333L9 17L12 13.3333"
      stroke="#EF8422"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 15V5"
      stroke="#EF8422"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // Второй аргумент: Имя компонента
  "ArrowIcon",
);

export default ArrowIcon;
