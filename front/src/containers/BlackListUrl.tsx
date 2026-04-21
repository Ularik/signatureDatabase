import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import InputElement from "../components/UI/InputElement/InputElement";
import SearchInput from "../components/SearchInput/SearchInput";
import PaginationCustom from "../components/UI/Pagination/PaginationCustom";
import UrlTable from "../components/UrlTable/UrlTable";
import InfoCardsLinks from "../components/UI/InfoCards/InfoCardsLinks/InfoCardsLinks";


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
        borderRadius={"20px"}
        border={"1px solid #486084"}
        padding={{xs: '15px 0', md: "7px 0 19px"}}
        marginBottom={"13px"}
        overflow={'hidden'}
      >
        <InputElement />

        <UrlTable rows={rows} />
      </Box>

      <Box marginLeft={"auto"}>
        <PaginationCustom total={55} />
      </Box>
    </Box>
  );
};

export default BlackListUrl;
