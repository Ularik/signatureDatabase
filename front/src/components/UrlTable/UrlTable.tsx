import { Typography } from "@mui/material";
import TableComponent from "../UI/TableComponent/TableComponent";
import type { RowTable } from "../../types";
import UrlIcon from "../UI/Icons/UrlIcon";
import CalendarIcon from "../UI/Icons/CalendarIcon";
import UrlLiteIcon from "../UI/Icons/UrlLiteIcon";


interface Props {
  rows: RowTable[];
}

const iconsStyle = {
  width: { xs: "14px", sm: "24px" },
  marginRight: { xs: "1px", sm: "10px" },
};

const UrlTable: React.FC<Props> = ({ rows }) => {
  const titles = [
    <>
      <UrlIcon
        sx={{
          ...iconsStyle,
          display: { xs: "none", sm: "inline-block" },
        }}
      />
      <UrlLiteIcon
        sx={{
          ...iconsStyle,
          display: { xs: "inline-block", sm: "none" },
        }}
      />
      URL
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

export default UrlTable;
