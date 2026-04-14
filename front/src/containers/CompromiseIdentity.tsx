import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import InputElement from "../components/UI/InputElement/InputElement";
import TableComponent from "../components/UI/TableComponent/TableComponent";
import PaginationCustom from "../components/UI/Pagination/PaginationCustom";
import { selectUser } from "../components/user/store/userSelectors";
import { useAppSelector } from "../app/hooks";
import NotAuthTable from "../components/UI/NotAuthTable/NotAuthTable";
import CompromiseTable from "../components/CompromiseTable/CompromiseTable";


const CompromiseIdentity = () => {
    const user = useAppSelector(selectUser);
    console.log(user)
    const rows = [
      {
        id: "1",
        firstColumn: "CVE-2019-7401",
        secondColumn:
          "SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1 Host: 212.42.102.70 SSTPCORRE",
        thirdColumn: "Это критическая уязвимость удаленного",
      },

      {
        id: "2",
        firstColumn: "CVE-2019-7401",
        secondColumn:
          "SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1 Host: 212.42.102.70 SSTPCORRE",
        thirdColumn: "Это критическая уязвимость удаленного",
      },
      {
        id: "3",
        firstColumn: "CVE-2019-7401",
        secondColumn:
          "SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1 Host: 212.42.102.70 SSTPCORRE",
        thirdColumn: "Это критическая уязвимость удаленного",
      },
      {
        id: "4",
        firstColumn: "CVE-2019-7401",
        secondColumn:
          "SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1 Host: 212.42.102.70 SSTPCORRE",
        thirdColumn: "Это критическая уязвимость удаленного",
      },
      {
        id: "5",
        firstColumn: "CVE-2019-7401",
        secondColumn:
          "SSTP_DUPLEX_POST /sra_{BA195980-CD49-458b-9E23-C84EE0ADCD75}/ HTTP/1.1 Host: 212.42.102.70 SSTPCORRE",
        thirdColumn: "Это критическая уязвимость удаленного",
      },
    ];

  return (
    <Box maxWidth={"1326px"} marginInline={"auto"} paddingBottom={"51px"}>
      <Box textAlign={"center"} color="#FFFFFF" marginBottom={"24px"}>
        <Typography fontSize={"32px"}>Идентификаторы компромитации</Typography>
        <Typography fontSize={"20px"}>
          Список вредоносных паттернов и индикаторов
        </Typography>
      </Box>
      <Box
        borderRadius={"20px"}
        border={"1px solid #486084"}
        padding={"7px 0 19px"}
        marginBottom={"13px"}
        position={"relative"}
      >
        <InputElement />
        {/* {user ? <TableComponent rows={rows} /> : <NotAuthTable />} */}
        <CompromiseTable rows={rows} />
      </Box>

      {user && (
        <Box marginLeft={"auto"}>
          <PaginationCustom total={55} />
        </Box>
      )}
    </Box>
  );
};

export default CompromiseIdentity;
