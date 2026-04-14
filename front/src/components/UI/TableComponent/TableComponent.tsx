import { Box } from '@mui/material';
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
            display: 'flex',
            justifyContent: 'space-between',
            paddingInline: "80px",
            background: "#283D5D",
          }}
        >
          {titles.map((title, index) => (
            <Box
              key={index}
              sx={{ flex: 1 }}
              textAlign={"center"}
            >
              {title}
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