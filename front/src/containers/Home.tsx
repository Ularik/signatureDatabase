import { Box, Typography } from "@mui/material";
import BreadCrumbsList from "../components/UI/BreadCrumb/BreadCrumbsList";
import SearchInput from "../components/SearchInput/SearchInput";
import InfoCardsList from "../components/UI/InfoCards/InfoCards";
import type { SearchQueryParamsItems } from "../types";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const ipv4Regex: RegExp = /(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

  const handleSearch = (params: SearchQueryParamsItems) => {
    const item = params.item.toString();
    if (ipv4Regex.test(item)) {
      navigate(`/black-list-ip?ip_source=${item}`);
    } else {
      navigate(`/black-list-url?url_source=${item}`);
    }
  }
    return (
      <>
        <Box
          maxWidth={850}
          marginInline={"auto"}
          marginBottom={{ xs: "12px", sm: "20px", md: "26px" }}
          textAlign={"center"}
        >
          <Typography
            fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
            color="white"
            fontWeight={400}
            fontFamily={"inherit"}
            lineHeight={"100%"}
            variant="h2"
            component={"h2"}
            marginTop={"60px"}
            marginBottom={{ xs: "10px", md: "26px" }}
          >
            Единая база киберугроз Кыргызской Республики
          </Typography>
          <Typography
            fontSize={{ xs: "12px", sm: "16px", md: "18px" }}
            color="white"
            fontFamily={"inherit"}
            lineHeight={"100%"}
            component={"p"}
          >
            Ключевой элемент национальной системы кибербезопасности,
            обеспечивающий централизованный обмен и использование информации об
            угрозах между государственными и критическими системами.
          </Typography>
        </Box>
        <SearchInput searchFunc={handleSearch} />

        <BreadCrumbsList />

        <InfoCardsList />
      </>
    );
};

export default Home;