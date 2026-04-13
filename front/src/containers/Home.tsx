import { Box, Typography } from "@mui/material";
import BreadCrumbsList from "../components/UI/BreadCrumb/BreadCrumbsList";
import SearchInput from "../components/SearchInput/SearchInput";
import InfoCardsList from "../components/UI/InfoCards/InfoCards";


const Home = () => {
    return (
      <>
        

        <Box
          maxWidth={850}
          marginInline={"auto"}
          marginBottom={"26px"}
          textAlign={"center"}
        >
          <Typography
            fontSize={"40px"}
            color="white"
            fontWeight={400}
            fontFamily={"inherit"}
            lineHeight={"100%"}
            variant="h2"
            component={"h2"}
            marginTop={"60px"}
            marginBottom={"26px"}
          >
            Единая база киберугроз Кыргызской Республики
          </Typography>
          <Typography
            fontSize={"18px"}
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
        <SearchInput />

        <BreadCrumbsList />

        <InfoCardsList />
      </>
    );
};

export default Home;