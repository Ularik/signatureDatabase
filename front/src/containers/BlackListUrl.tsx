import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import InputElement from "../components/UI/InputElement/InputElement";
import TableComponent from "../components/UI/TableComponent/TableComponent";
import PaginationCustom from "../components/UI/Pagination/PaginationCustom";


const BlackListUrl = () => {

  const rows = [
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
    {
      name: "https://docs.fortinet.com/product/fortiproxy/7.0",
      dateDetermine: 2024,
    },
  ];


    return (
      <Box maxWidth={"1326px"} marginInline={"auto"} paddingBottom={"51px"}>
        <Box textAlign={"center"} color="#FFFFFF" marginBottom={"24px"}>
          <Typography fontSize={"32px"}>Black list URL</Typography>
          <Typography fontSize={"20px"}>
            Список URL, признанных вредоносными
          </Typography>
        </Box>
        <Box
          borderRadius={"20px"}
          border={"1px solid #486084"}
          padding={"7px 0 19px"}
          marginBottom={"13px"}
        >
          <InputElement/>

          <TableComponent rows={rows} />
        </Box>

        <Box marginLeft={'auto'}>
          <PaginationCustom total={55} />
        </Box>
      </Box>
    );
};


export default BlackListUrl;