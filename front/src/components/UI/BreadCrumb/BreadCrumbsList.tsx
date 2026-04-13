import { Box } from "@mui/material";
import BreadCrumb from "./BreadCrumb";
import ProtectSvg from "../../../assets/protect.svg";
import DbSvg from "../../../assets/DB.svg";
import ClockSvg from "../../../assets/Clock.svg";


const BreadCrumbsList = () => {
  return (
    <Box
      maxWidth={"1214px"}
      marginInline={"auto"}
      marginBottom={"60px"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <BreadCrumb svg={ProtectSvg} title="SOC" text="источник данных" />
      <BreadCrumb svg={DbSvg} title="100+" text="записей в базе" />
      <BreadCrumb svg={ClockSvg} title="Регулярное" text="насыщение базы" />
    </Box>
  );
};

export default BreadCrumbsList;
