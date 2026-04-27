import { Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";


interface TableItemProps<T> {
  onClick: (id: string | number) => void;
  row: T & { isCopy: boolean };
}

const TableItem = <T extends { id: string | number }>({
  onClick,
  row,
}: TableItemProps<T>) => {
  // Исключаем служебные поля id и isCopy из отрисовки колонок
  const columns = Object.entries(row)
    .filter(([key]) => key !== "id" && key !== "isCopy")
    .map(([, value]) => value);

  const copy = async () => {
    const indicator = columns[0];
    if (indicator) {
      try {
        await navigator.clipboard.writeText(String(indicator));
        onClick(row.id);
      } catch (err) {
        console.error("Ошибка при копировании:", err);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "grid",
        gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
        gap: "10px",
        alignItems: "center",
        paddingBlock: "10px",
        paddingInline: { xs: "8px", md: "80px" },
        borderBlock: "1px solid #486084",
        transition: "0.3s",
        cursor: "pointer",
        "&:hover": {
          background: "#283D5D",
          "& .copy-icon": {
            opacity: { xs: 0, sm: 1 },
            transform: "translateX(0)",
          },
        },
        "&:active": {
          "& .lastColumn": {
            opacity: 0,
          },
          "& .copy-icon": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      }}
      onClick={copy}
    >
      {columns.map((value, index) => (
        <Typography
          key={index}
          textAlign={index === 0 ? "start" : "center"}
          className={index === columns.length - 1 ? "lastColumn" : ""}
          sx={{
            flex: 1,
            textWrap: "wrap",
            wordBreak: "break-word", // Чтобы длинные слова не ломали сетку
            minWidth: 0, // Важно для предотвращения распирания в grid/flex
            fontSize: { xs: "12px", sm: "14px", md: "18px" },
          }}
        >
          {value}
        </Typography>
      ))}

      <Typography
        className="copy-icon"
        sx={{
          position: "absolute",
          right: "10px",
          fontSize: { xs: "12px", md: "14px" },
          color: "#fff",
          opacity: 0, // Скрыта по умолчанию
          transform: "translateX(-1px)", // Немного смещена для эффекта вылета
          transition: "0.3s ease-in-out",
        }}
      >
        Copy
        {!row.isCopy ? (
          <ContentCopyIcon
            sx={{ height: "16px", width: "16px", marginLeft: "5px" }}
          />
        ) : (
          <DoneIcon sx={{ height: "16px", width: "16px", marginLeft: "5px" }} />
        )}
      </Typography>
    </Box>
  );
};;

export default TableItem;