import { Box, Typography } from "@mui/material";
import type React from "react";
import DownloadIcon from "../Icons/DownloadIcon";
import { Scale } from "@mui/icons-material";


interface Props {
  total: number;
}

const PaginationCustom: React.FC<Props> = ({ total }) => {
  const countPages = Math.ceil(total / 9);

  // Создаем массив всех чисел страниц
  const allPages = Array.from({ length: countPages }, (_, i) => i + 1);
  const lastPage = allPages[allPages.length - 1];

  // Вспомогательный компонент для отрисовки кружка страницы
  const PageCircle = ({ n }: { n: number }) => (
    <Box
      key={n}
      sx={{
        cursor: "pointer",
        width: "44px",
        height: "42px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #ffff",
        borderRadius: "50%",
        transition: "0.3s",
        // Используем background для градиента
        "&:hover": {
          background: "linear-gradient(to bottom, #EF8422, #A86222)",
          borderColor: "transparent", // Опционально: убираем белую рамку при ховере
        },
      }}
    >
      {n}
    </Box>
  );

  return (
    <Box
      display={"flex"}
      gap={"12px"}
      color={"#ffff"}
      alignItems="center"
      justifyContent={"end"}
    >
      {/* Кнопка Назад */}
      <Box
        sx={{
          border: "1px solid #FFFFFF",
          borderRadius: "30px",
          height: "42px",
          display: "flex",
          alignItems: "center",
          px: "20px",
          cursor: "pointer",
          "&:hover": {
            background: "linear-gradient(to bottom, #EF8422, #A86222)",
            borderColor: "transparent", // Опционально: убираем белую рамку при ховере
          },
        }}
      >
        {"< Предыдущая"}
      </Box>

      {/* Основная логика отрисовки */}
      {countPages <= 5 ? (
        // Если страниц 5 или меньше — выводим все
        allPages.map((page) => <PageCircle key={page} n={page} />)
      ) : (
        // Если страниц больше 5 — выводим сокращенно
        <>
          {allPages.slice(0, 3).map((page) => (
            <PageCircle key={page} n={page} />
          ))}

          <Typography sx={{ mx: 1 }}>...</Typography>

          <PageCircle n={lastPage} />
        </>
      )}

      {/* Кнопка Вперед */}
      <Box
        sx={{
          border: "1px solid #FFFFFF",
          borderRadius: "30px",
          height: "42px",
          display: "flex",
          alignItems: "center",
          px: "20px",
          cursor: "pointer",
          "&:hover": {
            background: "linear-gradient(to bottom, #EF8422, #A86222)",
            borderColor: "transparent", // Опционально: убираем белую рамку при ховере
          },
        }}
      >
        {"Следующая >"}
      </Box>

      <Box
        sx={{
          "&::before": {
            content: '""', 
            display: "block",
            height: "42px", 
            borderLeft: "2px solid #ffff",
            marginRight: "12px", // Отступ от палки до текста
          },
          height: "42px",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.1)", // Теперь это строка!
          },
        }}
      >
        Экспорт
        <DownloadIcon sx={{ marginLeft: "5px" }} />
      </Box>
    </Box>
  );
};

export default PaginationCustom;
