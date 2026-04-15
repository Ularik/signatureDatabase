import InfoCard from "./InfoCard";
import { Box } from "@mui/material";


const InfoCardsList = () => {
    return (
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"31px"}
        justifyContent={{xs: "space-around", lg: "space-between"}}
        paddingBottom={"35px"}
      >
        <InfoCard
          title="Black List URL"
          navigate={"/black-list-url"}
          text="Реестр URL-адресов, идентифицированных как источники вредоносного
        контента, подлежащих блокировке или ограничению доступа в рамках
        обеспечения кибербезопасности."
        />
        <InfoCard
          title="Black List IP"
          navigate={"/black-list-ip"}
          text="Список IP-адресов, признанных вредоносными, подлежащих блокировке или ограничению доступа в целях предотвращения киберугроз."
        />
        <InfoCard
          title="Идентификатор компромитации"
          navigate={"/compromise-identity"}
          text="Список вредоносных паттернов и индикаторов, выявленных при анализе логов и используемых для формирования правил обнаружения и блокировки атак."
        />
      </Box>
    );
};

export default InfoCardsList;