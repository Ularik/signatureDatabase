import InputElement from "../../components/UI/InputElement/InputElement";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import PaginationCustom from "../../components/UI/Pagination/PaginationCustom";
import NotAuthTable from "../../components/UI/NotAuthTable/NotAuthTable";
import { useEffect, useState } from "react";
import type { BlackListCompromiseItem, SearchQueryParamsItems, User } from "../../types";
import DocIcon from "../../components/UI/Icons/DocIcon";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import TableGeneral from "../../components/TableGeneral/TableGeneral";
import ModalDescription from "../../components/UI/ModalDescription/ModalDescription";
import ArrowIcon from "../../components/UI/Icons/ArrowIcon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getCompromises } from "./store/compromiseThunks";
import { selectCompromises, selectCompromisesTotal, selectCompromisesLimit } from "./store/compromiseSelectors";
import GeneralPageLayot from "../../components/GeneralPage/GeneralPage";
import InfoCardsLinks from "../../components/UI/InfoCards/InfoCardsLinks/InfoCardsLinks";
import { Box } from "@mui/material";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useSearchParams } from "react-router";


const arrowIconStyle = {
  opacity: 0,
  width: "18px",
  height: "22px",
};

const iconsStyle = {
  width: { xs: "16px", sm: "24px" },
  marginRight: { xs: "3px", sm: "10px" },
};

const searchFilters = [
  { value: "поиск по cve", key: "cve" },
  { value: "поиск по сигнатуре", key: "signature" },
];

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
  const total = useAppSelector(selectCompromisesTotal);
  const limit = useAppSelector(selectCompromisesLimit);
  const rows = useAppSelector(selectCompromises);

  const mappedRows = rows.map((row) => ({
    id: row.id,
    cve: row.cve,
    signature: row.signature,
    description: row.description,
  }));

  const [page, setPage] = useState<number>(1);

  const [searchParamsRouter, setSearchParamsRouter] = useSearchParams();

  const setSearch = (item: SearchQueryParamsItems) => {
    const params = new URLSearchParams(searchParamsRouter);

    const key = item.key === "current" ? "ip_source" : item.key;
    params.set(key, item.value);
    params.set("page", "1");
    setSearchParamsRouter(params);
  };

  useEffect(() => {
    try {
      if (user) {
        let page = Number(searchParamsRouter.get("page"));
        if (!page) page = 1;
          dispatch(
          getCompromises({
            item: searchParamsRouter,
            limit: limit,
            offset: (page - 1) * limit,
          }),
        )
        setPage(page);
      }

    } catch (err) {
      console.log(err);
    }
  }, [dispatch, user, searchParamsRouter]);

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
    <>
      <GeneralPageLayot
        title="Идентификаторы компромитации"
        subtitle="Список вредоносных паттернов и индикаторов"
        pagination={
          <PaginationCustom total={total} limit={limit} page={page} />
        }
        topActions={
          <>
            <Box marginBottom={"20px"} display={{ xs: "block", sm: "none" }}>
              <InfoCardsLinks />
            </Box>

            <Box display={{ xs: "block", sm: "none" }}>
              <SearchInput searchFunc={setSearch} />
            </Box>
          </>
        }
      >
        <InputElement searchFilters={searchFilters} />

        {user ? (
          <TableGeneral onClick={openModal} titles={titles} rows={mappedRows} />
        ) : (
          <NotAuthTable />
        )}
      </GeneralPageLayot>
      {signature && (
        <ModalDescription
          item={signature}
          isOpen={isOpen}
          close={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default CompromiseIdentity;
