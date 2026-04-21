import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import type { RowTable } from '../../../types';
import TableItem from "./TableItem";
import type { RowsCopy } from '../../../types';
import { useState } from 'react';


interface Props {
  titles: React.ReactElement[];
  rows: RowTable[];
  onClick?: (id: string) => void;
}


const TableComponent: React.FC<Props> = ({ titles, rows, onClick }) => {
  const [rowsCopy, setRowsCopy] = useState<RowsCopy[]>(
    rows.map((row) => ({ ...row, isCopy: false })),
  );

  const copy = async (id: string) => {
    setRowsCopy(rowsCopy.map(row => {
      if (id === row.id) return { ...row, isCopy: true };
      return {...row, isCopy: false}
    }));
    if (onClick) onClick(id);
  }

    return (
      <Box
        component={Paper}
        sx={{
          backgroundColor: "inherit",
          display: "flex",
          flexDirection: "column",
          gap: "11px",
          color: "#FFFFFF",
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
          <TableItem onClick={copy} row={row} key={index} />
        ))}
      </Box>
    );
};


export default TableComponent;