import { Typography } from "@mui/material";
import TableComponent from "../UI/TableComponent/TableComponent";
import type { RowTable } from "../../types";
import IpIcon from "../UI/Icons/IpIcon";
import CalendarIcon from "../UI/Icons/CalendarIcon";
import GeolocationIcon from "../UI/Icons/GeolocationIcon";

interface Props {
  rows: RowTable[];
}

const IpTable: React.FC<Props> = ({ rows }) => {
  let titles = [
    <Typography>
      <IpIcon sx={{ marginRight: "10px" }} />
      Ip-адресс
    </Typography>,
    <Typography>
      <GeolocationIcon sx={{ marginRight: "10px" }} />
      Страна
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

export default IpTable;
