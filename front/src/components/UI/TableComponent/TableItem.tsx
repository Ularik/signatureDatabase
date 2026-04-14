import { Box, Typography } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import type { RowsCopy } from "../../../types";


interface Props {
  onClick: (id: string) => void;
  row: RowsCopy;
}

const TableItem: React.FC<Props> = ({ onClick, row }) => {
  const columns = Object.values(row).slice(1, -1)

  const copy = async (e: React.MouseEvent) => {
    const indicator = row.firstColumn;

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
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          alignItems: "center",
          paddingBlock: "10px",
          paddingInline: "80px",
          borderBlock: "1px solid #486084",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            background: "#283D5D",
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
          textAlign={"center"} 
          sx={{ flex: 1 }}
          >{value}
          </Typography>
        ))}

        <Typography
          className="copy-icon"
          sx={{
            position: "absolute",
            right: "10px",
            fontSize: "14px",
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
            <DoneIcon
              sx={{ height: "16px", width: "16px", marginLeft: "5px" }}
            />
          )}
        </Typography>
      </Box>
    );
};

export default TableItem;