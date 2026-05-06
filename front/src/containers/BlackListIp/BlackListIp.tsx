import PaginationCustom from "../../components/UI/Pagination/PaginationCustom";
import InputElement from "../../components/UI/InputElement/InputElement";
import TableGeneral from "../../components/TableGeneral/TableGeneral";
import IpIcon from "../../components/UI/Icons/IpIcon";
import ArrowIcon from "../../components/UI/Icons/ArrowIcon";
import GeolocationIcon from "../../components/UI/Icons/GeolocationIcon";
import CalendarIcon from "../../components/UI/Icons/CalendarIcon";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectIpList, selectIpListError, selectIpListLoading, selectIpTotal, selectIpLimit } from "./store/ipSelectors";
import { useEffect, useState } from "react";
import { getIpList } from "./store/ipThunks";
import type { SearchQueryParamsItems } from "../../types";
import GeneralPageLayot from "../../components/GeneralPage/GeneralPage";
import InfoCardsLinks from "../../components/UI/InfoCards/InfoCardsLinks/InfoCardsLinks";
import { Box } from "@mui/material";
import SearchInput from "../../components/SearchInput/SearchInput";


const iconsStyle = {
  width: { xs: "16px", sm: "24px" },
  marginRight: { xs: "3px", sm: "10px" },
};


const arrowIconStyle = {
  opacity: 0,
  width: "18px",
  height: "22px",
};

const searchFilters = [
  { item: "страна", key: "country_source" },
  { item: "ip-адресс", key: "ip_source" },
  { item: "Год обнаружения", key: "attack_date" },
];


const BlackListIp = () => {
  const dispatch = useAppDispatch();
  const rows = useAppSelector(selectIpList);
  const total = useAppSelector(selectIpTotal);
  const limit = useAppSelector(selectIpLimit);

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
    if (item.key === 'current') {
      setSearchParams({ ...item, key: "ip_source" });
    } else {
      setSearchParams(item);
    }
    setPage(1);
  };

  useEffect(() => {
    if (searchParams !== null) {
      dispatch(
        getIpList({
          item: searchParams,
          limit: limit,
          offset: (page - 1) * limit,
        }),
      );
    } else {
      dispatch(getIpList({ limit: limit, offset: (page - 1) * limit }));
    }
  }, [dispatch, page, searchParams]);

  const titles = [
    <>
      <IpIcon sx={iconsStyle} />
      Ip-адресс
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,
    <>
      <GeolocationIcon sx={iconsStyle} />
      Страна
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,
    <>
      <CalendarIcon sx={iconsStyle} />
      Дата обнаружения
      <ArrowIcon className="arrowIcon" sx={arrowIconStyle} />
    </>,
  ];

  return (
    <GeneralPageLayot
      title="Black list IP"
      subtitle="Список IP-адрессов, признанных вредоносными"
      topActions={
        <>
          <Box marginBottom={"20px"} display={{ xs: "block", sm: "none" }}>
            <InfoCardsLinks />
          </Box>

          <Box display={{ xs: "block", sm: "none" }}>
            <SearchInput searchFunc={setSearch}/>
          </Box>
        </>
      }
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
      <TableGeneral titles={titles} rows={rows} />
    </GeneralPageLayot>
  );
};

export default BlackListIp;
