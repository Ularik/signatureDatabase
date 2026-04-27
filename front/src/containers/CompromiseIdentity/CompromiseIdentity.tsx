import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import InputElement from "../../components/UI/InputElement/InputElement";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import PaginationCustom from "../../components/UI/Pagination/PaginationCustom";
import NotAuthTable from "../../components/UI/NotAuthTable/NotAuthTable";
import { useEffect, useState } from "react";
import type { BlackListCompromiseItem, User } from "../../types";
import DocIcon from "../../components/UI/Icons/DocIcon";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import InfoCardsLinks from "../../components/UI/InfoCards/InfoCardsLinks/InfoCardsLinks";
import SearchInput from "../../components/SearchInput/SearchInput";
import TableGeneral from "../../components/TableGeneral/TableGeneral";
import ModalDescription from "../../components/UI/ModalDescription/ModalDescription";
import ArrowIcon from "../../components/UI/Icons/ArrowIcon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCompromises } from "./store/CompromiseThunks";
import { selectCompromises } from "./store/compromiseSelectors";


const arrowIconStyle = {
  opacity: 0,
  width: "18px",
  height: "22px",
};

const iconsStyle = {
  width: { xs: "16px", sm: "24px" },
  marginRight: { xs: "3px", sm: "10px" },
};

interface Props {
  user: User | null;
}

const CompromiseIdentity: React.FC<Props> = ({ user }) => {
  const [signature, setSignature] = useState<BlackListCompromiseItem | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (id: string | number) => {
    const signatureData = rows.find((row) => row.id === id);
    if (signatureData) {
      setSignature(signatureData);
      setIsOpen(true);
    }
  };

  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectCompromises)

  useEffect(() => {
    try {
      dispatch(getCompromises())
    } catch(err) {
      console.log(err);
    }
  }, [dispatch])

  const titles = [
    <>
      <GppMaybeOutlinedIcon sx={iconsStyle} />
      Уязвимости (CVE)
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,
    <>
      <DocIcon sx={iconsStyle} />
      Сигнатура
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,
    <>
      <CreateOutlinedIcon sx={iconsStyle} />
      Описание
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
          Идентификаторы компромитации
        </Typography>
        <Typography fontSize={{ xs: "12px", sm: "16px", md: "20px" }}>
          Список вредоносных паттернов и индикаторов
        </Typography>
      </Box>

      <Box marginBottom={"20px"} display={{ xs: "block", sm: "none" }}>
        <InfoCardsLinks />
      </Box>

      <Box display={{ xs: "block", sm: "none" }}>
        <SearchInput />
      </Box>
      <Box
        borderRadius={{ xs: "10px", md: "20px" }}
        border={"1px solid #486084"}
        position={"relative"}
        padding={{ xs: "15px 0", md: "7px 0 19px" }}
        marginBottom={"13px"}
        overflow={"hidden"}
      >
        <InputElement />
        {user ? (
          <TableGeneral onClick={openModal} titles={titles} rows={rows} />
        ) : (
          <NotAuthTable />
        )}
        {signature && (
          <ModalDescription
            item={signature}
            isOpen={isOpen}
            close={() => setIsOpen(false)}
          />
        )}
      </Box>

      <Box marginLeft={"auto"}>
        <PaginationCustom total={55} />
      </Box>
    </Box>
  );
};

export default CompromiseIdentity;
