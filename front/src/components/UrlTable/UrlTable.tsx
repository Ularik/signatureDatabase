import { Typography } from "@mui/material";
import TableComponent from "../UI/TableComponent/TableComponent";
import type { RowTable } from "../../types";
import UrlIcon from "../UI/Icons/UrlIcon";
import CalendarIcon from "../UI/Icons/CalendarIcon";


interface Props {
  rows: RowTable[];
}

const UrlTable: React.FC<Props> = ({ rows }) => {
  const titles = [
    <Typography>
      <UrlIcon sx={{ marginRight: "10px" }} />
      url-адресс
    </Typography>,

    <Typography>
      <CalendarIcon sx={{ marginRight: "10px" }} />
      Дата обнаружения
    </Typography>,
  ];

  return (
    <>
      <TableComponent titles={titles} rows={rows} />
    </>
  );
};

export default UrlTable;
