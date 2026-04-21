import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import PaginationCustom from "../components/UI/Pagination/PaginationCustom";
import InputElement from "../components/UI/InputElement/InputElement";
import IpTable from "../components/IpTable/IpTable";


const BlackListIp = () => {

  const rows = [
    {
      id: "1",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "Кыргызская Республика",
      thirdColumn: "2024",
    },
    {
      id: "2",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "Кыргызская Республика",
      thirdColumn: "2024",
    },
    {
      id: "3",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "Кыргызская Республика",
      thirdColumn: "2024",
    },
    {
      id: "4",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "Кыргызская Республика",
      thirdColumn: "2024",
    },
    {
      id: "5",
      firstColumn: "https://docs.fortinet.com/product/fortiproxy/7.0",
      secondColumn: "Кыргызская Республика",
      thirdColumn: "2024",
    },
  ];

  return (
    <Box maxWidth={"1326px"} marginInline={"auto"} paddingBottom={"51px"}>
      <Box textAlign={"center"} color="#FFFFFF" marginBottom={"24px"}>
        <Typography fontSize={"32px"}>Black list IP</Typography>
        <Typography fontSize={"20px"}>
          Список IP-адрессов, признанных вредоносными
        </Typography>
      </Box>
      <Box
        borderRadius={"20px"}
        overflow={'hidden'}
        border={"1px solid #486084"}
        padding={"7px 0 19px"}
        marginBottom={"13px"}
      >
        <InputElement />

        <IpTable rows={rows} />
      </Box>

      <Box marginLeft={"auto"}>
        <PaginationCustom total={55} />
      </Box>
    </Box>
  );
};

export default BlackListIp;
