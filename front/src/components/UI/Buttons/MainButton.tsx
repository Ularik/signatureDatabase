import { Button } from "@mui/material";


interface Props {
  text: string;
  padding: string;
  onClick?: (e: React.MouseEvent) => void;
}

const MainButton: React.FC<Props> = ({ text, padding, onClick }) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        /* Базовые стили */
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: { padding }, // px-9.5 это примерно 38px
        borderRadius: "60px",
        fontWeight: 500,
        fontSize: "16px",
        textTransform: "none", // Отключаем капс, который в MUI по умолчанию
        color: "#FFFFFF",
        border: "none",
        outline: "none",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        transition: "color 0.3s ease-in-out, box-shadow 0.4s ease-in-out",

        /* Основной градиент (оранжевый) */
        background: "linear-gradient(to bottom, #EF8422, #A86222)",

        /* Слой для Hover (белый градиент) */
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, #FFFFFF, #E8DBCF)",
          opacity: 0,
          transition: "opacity 0.4s ease-in-out",
          zIndex: -1,
        },

        /* Состояние Hover */
        "&:hover": {
          color: "#EF8422",
          boxShadow: "0 4px 10px rgba(168, 98, 34, 0.3)",
          "&::before": {
            opacity: 1, // Проявляем белый градиент поверх оранжевого
          },
        },

        /* Состояние Active */
        "&:active": {
          background: "#A86222",
          boxShadow: "none",
          transform: "scale(0.98)", // Небольшой эффект нажатия
        },

        /* Состояние Focus */
        "&.Mui-focusVisible": {
          outline: "none",
          boxShadow: "0 0 0 0.2rem rgba(168, 98, 34, 0.5)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default MainButton;
