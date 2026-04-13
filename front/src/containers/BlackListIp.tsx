import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import TableComponent from "../components/UI/TableComponent/TableComponent";
import PaginationCustom from "../components/UI/Pagination/PaginationCustom";
import InputElement from "../components/UI/InputElement/InputElement";


const BlackListIp = () => {
  function createData(name: string, country: string, dateDetermine: number) {
    return { name, country, dateDetermine };
  }

  const rows = [
    createData("146.70.189.43", "Нидерланды", 2024),
    createData("146.70.189.43", "Кыргызская Республика", 2024),
    createData("146.70.189.43", "Нидерланды", 2024),
    createData("146.70.189.43", "Кыргызская Республика", 2024),
    createData("146.70.189.43", "Кыргызская Республика", 2024),
    createData("146.70.189.43", "Кыргызская Республика", 2024),
    createData("146.70.189.43", "Нидерланды", 2024),
    createData("146.70.189.43", "Кыргызская Республика", 2024),
    createData("146.70.189.43", "Кыргызская Республика", 2024),
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
        border={"1px solid #486084"}
        padding={"7px 0 19px"}
        marginBottom={"13px"}
      >
        <InputElement/>

        <TableComponent rows={rows}/>
      </Box>

      <Box marginLeft={"auto"}>
        <PaginationCustom total={55} />
      </Box>
    </Box>
  );
};

export default BlackListIp;
