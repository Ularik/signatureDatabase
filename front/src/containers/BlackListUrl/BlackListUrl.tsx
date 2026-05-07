import InputElement from "../../components/UI/InputElement/InputElement";
import PaginationCustom from "../../components/UI/Pagination/PaginationCustom";
import TableGeneral from "../../components/TableGeneral/TableGeneral";
import UrlIcon from "../../components/UI/Icons/UrlIcon";
import UrlLiteIcon from "../../components/UI/Icons/UrlLiteIcon";
import ArrowIcon from "../../components/UI/Icons/ArrowIcon";
import CalendarIcon from "../../components/UI/Icons/CalendarIcon";
import { getUrlList } from "./store/urlThunks";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectUrlList, selectUrlListLoading, selectUrlListError, selectUrlLimit, selectUrlOffset, selectUrlListTotal } from "./store/urlSelectors";
import { useEffect, useState } from "react";
import type { SearchQueryParamsItems } from "../../types";
import GeneralPageLayot from "../../components/GeneralPage/GeneralPage";
import InfoCardsLinks from "../../components/UI/InfoCards/InfoCardsLinks/InfoCardsLinks";
import { Box } from "@mui/material";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useSearchParams } from "react-router";


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
  { value: "url-адресс", key: "url_source" },
  { value: "Дата обнаружения", key: "attack_date" },
];

const BlackListUrl = () => {
  const dispatch = useAppDispatch();

  const [page, setPage] = useState<number>(1);

  const rows = useAppSelector(selectUrlList);
  const total = useAppSelector(selectUrlListTotal);
  const limit = useAppSelector(selectUrlLimit);

  const [searchParamsRouter, setSearchParamsRouter] = useSearchParams();

  const setSearch = (item: SearchQueryParamsItems) => {
    const params = new URLSearchParams(searchParamsRouter);

    const key = item.key === "current" ? "ip_source" : item.key;
    params.set(key, item.value);
    params.set("page", "1");
    setSearchParamsRouter(params);
  };

  useEffect(() => {
    let page = Number(searchParamsRouter.get("page"));
    if (!page) page = 1;
    dispatch(
      getUrlList({
        item: searchParamsRouter,
        limit: limit,
        offset: (page - 1) * limit,
      }),
    );
    setPage(page);
  }, [dispatch, searchParamsRouter]);

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
    <GeneralPageLayot
      title="Black list URL"
      subtitle="Список URL, признанных вредоносными"
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
      pagination={
        <PaginationCustom
          total={total}
          limit={limit}
          page={page}
        />
      }
    >
      <InputElement searchFilters={searchFilters} />
      <TableGeneral titles={titles} rows={rows} />
    </GeneralPageLayot>
  );
};

export default BlackListUrl;
