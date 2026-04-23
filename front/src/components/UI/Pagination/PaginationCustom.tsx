import { Box, Typography } from "@mui/material";
import type React from "react";
import DownloadIcon from "../Icons/DownloadIcon";


interface Props {
  total: number;
}

const fontsStyle = {
  fontSize: {xs: '12px', sm: '14px', md: "18px"},
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
        ...fontsStyle,
        cursor: "pointer",
        width: { xs: "26px", sm: "30px", md: "44px" },
        height: { xs: "24px", sm: "30px", md: "42px" },
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
      gap={{ xs: "10px", md: "12px" }}
      color={"#ffff"}
      alignItems="center"
      justifyContent={"end"}
    >
      {/* Кнопка Назад */}
      <Box
        sx={{
          ...fontsStyle,
          border: "1px solid #FFFFFF",
          borderRadius: "30px",
          height: { xs: "26px", sm: "32px", md: "42px" },
          display: "flex",
          gap: 1,
          alignItems: "center",
          px: { xs: "10px", sm: "13px", md: "20px" },
          cursor: "pointer",
          "&:hover": {
            background: "linear-gradient(to bottom, #EF8422, #A86222)",
            borderColor: "transparent", // Опционально: убираем белую рамку при ховере
          },
        }}
      >
        <Typography>{"< "}</Typography>

        <Typography display={{ xs: "none", md: "inline-block" }}>
          Предыдущая
        </Typography>
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

          <Typography>...</Typography>

          <PageCircle n={lastPage} />
        </>
      )}

      {/* Кнопка Вперед */}
      <Box
        sx={{
          ...fontsStyle,
          border: "1px solid #FFFFFF",
          borderRadius: "30px",
          height: { xs: "26px", sm: "32px", md: "42px" },
          display: "flex",
          gap: 1,
          alignItems: "center",
          px: { xs: "10px", sm: "13px", md: "20px" },
          cursor: "pointer",
          "&:hover": {
            background: "linear-gradient(to bottom, #EF8422, #A86222)",
            borderColor: "transparent", // Опционально: убираем белую рамку при ховере
          },
        }}
      >
        <Typography display={{ xs: "none", md: "inline-block" }}>
          Следующая
        </Typography>
        <Typography>{">"}</Typography>
      </Box>

      <Box
        sx={{
          display: "block",
          height: { xs: "26px", sm: "32px", md: "42px" },
          borderLeft: "2px solid #ffff",
        }}
      ></Box>
      <Box
        sx={{
          ...fontsStyle,
          height: "42px",
          display: "flex",
          gap: "5px",
          alignItems: "center",
          cursor: "pointer",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.1)", // Теперь это строка!
          },
        }}
      >
        <Box sx={{ display: { xs: "none", sm: "inline-block" } }}>Экспорт</Box>
        <DownloadIcon />
      </Box>
    </Box>
  );
};

export default PaginationCustom;
