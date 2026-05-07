import { Box, Typography } from "@mui/material";
import type React from "react";
import DownloadIcon from "../Icons/DownloadIcon";
import { useSearchParams } from "react-router";


interface Props {
  total: number;
  limit: number;
  page: number;
}

const fontsStyle = {
  fontSize: {xs: '12px', sm: '14px', md: "18px"},
}

const PaginationCustom: React.FC<Props> = ({ total, limit, page }) => {
  const countPages = Math.ceil(total / limit);

  const [searchParamsRouter, setSearchParamsRouter] = useSearchParams();

  const onChange = (page: number) => {
    const params = new URLSearchParams(searchParamsRouter);

    params.set("page", String(page));
    setSearchParamsRouter(params);
  };

  // Вспомогательный компонент для отрисовки кружка страницы
  const PageCircle = ({ n }: { n: number }) => (
    <Box
      key={n}
      onClick={() => onChange(n)}
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
        background:
          page !== n
            ? "inherit"
            : "linear-gradient(to bottom, #EF8422, #A86222)",
        "&:hover": {
          background: "linear-gradient(to bottom, #EF8422, #A86222)",
          borderColor: "transparent", // Опционально: убираем белую рамку при ховере
        },
      }}
    >
      {n}
    </Box>
  );

  // Логика определения видимых страниц
  const renderPages = () => {
    const pages = [];
    const range = 1; // Сколько страниц показывать по бокам от текущей

    if (countPages <= 5) {
      // Если страниц мало — выводим все
      for (let i = 1; i <= countPages; i++) pages.push(<PageCircle key={i} n={i} />);
    } else {
      // 1. Всегда показываем первую страницу
      pages.push(<PageCircle key={1} n={1} />);

      // 2. Рисуем левое многоточие, если мы далеко от начала
      if (page > range + 2) {
        pages.push(<Typography key="dots-left">...</Typography>);
      }

      // 3. Определяем границы средних страниц
      let start = Math.max(2, page - range);
      let end = Math.min(countPages - 1, page + range);

      // Корректировка, чтобы всегда было видно хотя бы 3 кнопки в середине (для удобства клика)
      if (page <= range + 2) end = 4;
      if (page >= countPages - range - 1) start = countPages - 3;

      for (let i = start; i <= end; i++) {
        pages.push(<PageCircle key={i} n={i} />);
      }

      // 4. Рисуем правое многоточие, если мы далеко от конца
      if (page < countPages - range - 1) {
        pages.push(<Typography key="dots-right">...</Typography>);
      }

      // 5. Всегда показываем последнюю страницу
      pages.push(<PageCircle key={countPages} n={countPages} />);
    }
    return pages;
  };

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
        onClick={() => {
          if (page >= 2) onChange(page - 1);
        }}
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
      {renderPages()}

      {/* Кнопка Вперед */}
      <Box
        onClick={() => {
          if (page < countPages) onChange(page + 1);
        }}
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
