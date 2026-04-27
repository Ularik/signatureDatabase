import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import TableItem from "./TableItem";
import { useState } from "react";


interface TableGeneralProps<T> {
  titles: React.ReactElement[];
  rows: T[];
  onClick?: (id: string | number) => void;
}

const TableGeneral = <T extends { id: string | number }>({
  titles,
  rows,
  onClick,
}: TableGeneralProps<T>) => {
  // Типизируем состояние как массив входящего типа + поле isCopy
  const [rowsCopy, setRowsCopy] = useState<(T & { isCopy: boolean })[]>(
    rows.map((row) => ({ ...row, isCopy: false })),
  );

  const handleCopy = async (id: string | number) => {
    setRowsCopy((prev) =>
      prev.map((row) => ({
        ...row,
        isCopy: row.id === id,
      })),
    );
    if (onClick) onClick(id);
  };

  return (
    <Box
      component={Paper}
      sx={{
        position: "relative",
        backgroundColor: "inherit",
        display: "flex",
        flexDirection: "column",
        gap: "11px",
        color: "#FFFFFF",
        minHeight: '300px'
      }}
    >
      <Box
        id="title"
        paddingBlock={"15.84px"}
        sx={{
          display: "grid",
          gridTemplateColumns: `repeat(${titles.length}, auto)`,
          paddingInline: { xs: "8px", md: "80px" },
          paddingBlock: { xs: "6.5px", md: "10px" },
          background: "#283D5D",
        }}
      >
        {titles.map((title, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                color: "#EF8422",
                "& .arrowIcon": {
                  transition: "0.3s",
                  opacity: { xs: 1, sm: 0 },
                  visibility: "visible",
                  transform: "translateX(0)", // Можно добавить легкую анимацию
                },
              },
              paddingLeft: index === 0 ? { xs: "25px", md: 0 } : null,
            }}
            textAlign={index === 0 ? "start" : "center"}
          >
            <Typography
              sx={{ fontSize: { xs: "10px", sm: "15px", md: "18px" } }}
            >
              {title}
            </Typography>
          </Box>
        ))}
      </Box>

      {rowsCopy.map((row, index) => (
        <TableItem key={row.id ?? index} onClick={handleCopy} row={row} />
      ))}
    </Box>
  );
};

export default TableGeneral;
