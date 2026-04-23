import { createSvgIcon } from "@mui/material/utils";

// 1. Вызываем функцию
const GeolocationIcon = createSvgIcon(
  // Первый аргумент: содержимое SVG (обычно теги <path>, <circle> и т.д.)
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5556 10.0103C19.5679 15.0033 14.1718 20.2174 12.3594 21.8282C12.1905 21.9589 11.9847 22.0299 11.773 22.0305C11.5613 22.031 11.3551 21.9611 11.1856 21.8313C9.36523 20.23 3.94331 15.0442 3.93095 10.0512C3.92569 7.92952 4.74373 5.89254 6.20511 4.38841C7.66648 2.88428 9.65149 2.03622 11.7234 2.03079C13.7954 2.02536 15.7846 2.863 17.2534 4.35945C18.7222 5.85589 19.5503 7.88856 19.5556 10.0103Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.7506 13.0309C13.3686 13.0266 14.6769 11.6801 14.6728 10.0232C14.6687 8.36636 13.3537 7.02665 11.7358 7.03089C10.1178 7.03514 8.80948 8.38172 8.81358 10.0386C8.81769 11.6954 10.1326 13.0351 11.7506 13.0309Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,

  // Второй аргумент: Имя компонента
  "GeolocationIcon",
);

export default GeolocationIcon;
