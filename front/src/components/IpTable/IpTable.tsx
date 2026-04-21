import { Typography } from "@mui/material";
import TableComponent from "../UI/TableComponent/TableComponent";
import type { RowTable } from "../../types";
import IpIcon from "../UI/Icons/IpIcon";
import CalendarIcon from "../UI/Icons/CalendarIcon";
import GeolocationIcon from "../UI/Icons/GeolocationIcon";

interface Props {
  rows: RowTable[];
}

const iconsStyle = {
  width: { xs: "14px", sm: "24px" },
  marginRight: { xs: "1px", sm: "10px" },
};


const IpTable: React.FC<Props> = ({ rows }) => {
  let titles = [
    <>
      <IpIcon sx={iconsStyle} />
      Ip-адресс
    </>,
    <>
      <GeolocationIcon sx={iconsStyle} />
      Страна
    </>,
    <>
      <CalendarIcon sx={iconsStyle} />
      Дата обнаружения
    </>,
  ];

  return (
    <>
      <TableComponent titles={titles} rows={rows} />
    </>
  );
};

export default IpTable;
