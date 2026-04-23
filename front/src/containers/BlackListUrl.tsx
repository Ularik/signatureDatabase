import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import InputElement from "../components/UI/InputElement/InputElement";
import SearchInput from "../components/SearchInput/SearchInput";
import PaginationCustom from "../components/UI/Pagination/PaginationCustom";
import TableGeneral from "../components/TableGeneral/TableGeneral";
import InfoCardsLinks from "../components/UI/InfoCards/InfoCardsLinks/InfoCardsLinks";
import UrlIcon from "../components/UI/Icons/UrlIcon";
import UrlLiteIcon from "../components/UI/Icons/UrlLiteIcon";
import ArrowIcon from "../components/UI/Icons/ArrowIcon";
import CalendarIcon from "../components/UI/Icons/CalendarIcon";

const iconsStyle = {
  width: { xs: "16px", sm: "24px" },
  marginRight: { xs: "3px", sm: "10px" },
};

const arrowIconStyle = {
  opacity: 0,
  width: "18px",
  height: "22px",
};

const BlackListUrl = () => {
  const rows = [
    {
      id: "1",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "2024",
    },
    {
      id: "2",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "2024",
    },
    {
      id: "3",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "2024",
    },
    {
      id: "4",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "2024",
    },
    {
      id: "5",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "2024",
    },
  ];
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
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,

    <>
      <CalendarIcon sx={iconsStyle} />
      Дата обнаружения
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,
  ];

  return (
    <Box maxWidth={"1326px"} marginInline={"auto"} paddingBottom={"51px"}>
      <Box
        textAlign={"center"}
        color="#FFFFFF"
        marginBottom={{ xs: "10px", md: "24px" }}
      >
        <Typography
          fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
          marginBottom={{ xs: "5px", md: "10px" }}
        >
          Black list URL
        </Typography>
        <Typography fontSize={{ xs: "12px", sm: "16px", md: "20px" }}>
          Список URL, признанных вредоносными
        </Typography>
      </Box>

      <Box marginBottom={"20px"} display={{ xs: "block", sm: "none" }}>
        <InfoCardsLinks />
      </Box>

      <Box display={{ xs: "block", sm: "none" }}>
        <SearchInput />
      </Box>
      <Box
        borderRadius={{xs: "10px", md: "20px"}}
        border={"1px solid #486084"}
        padding={{ xs: "15px 0", md: "7px 0 19px" }}
        marginBottom={"13px"}
        overflow={"hidden"}
      >
        <InputElement />

        <TableGeneral titles={titles} rows={rows} />
      </Box>

      <Box marginLeft={"auto"}>
        <PaginationCustom total={55} />
      </Box>
    </Box>
  );
};

export default BlackListUrl;
