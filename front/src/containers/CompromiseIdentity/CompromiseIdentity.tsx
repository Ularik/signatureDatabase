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
  { item: "поиск по cve", key: "cve" },
  { item: "поиск по сигнатуре", key: "signature" },
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

  const localPage = localStorage.getItem("page");
  const [page, setPage] = useState<number>(
    localPage ? JSON.parse(localPage) : 1,
  );
  const paginationPage = (page: number) => {
    setPage(page);
    localStorage.setItem("page", JSON.stringify(page));
  };

  const [searchParams, setSearchParams] =
    useState<SearchQueryParamsItems | null>(null);

  const setSearch = (item: SearchQueryParamsItems) => {
    setSearchParams(item);
    setPage(1);
  };

  useEffect(() => {
    try {
      if (user)
        if (searchParams !== null) {
          dispatch(
            getCompromises({
              item: searchParams,
              limit: limit,
              offset: (page - 1) * limit,
            }),
          );
        } else {
          dispatch(
            getCompromises({ limit: limit, offset: (page - 1) * limit }),
          );
        }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch, page, user, searchParams]);

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
          <PaginationCustom
            total={total}
            limit={limit}
            page={page}
            onChange={paginationPage}
          />
        }
      >
        <InputElement searchFilters={searchFilters} searchFunc={setSearch} />

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
