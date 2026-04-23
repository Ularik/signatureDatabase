import { Grid } from "@mui/material";
import GlobusIcon from "../../Icons/GlobusIcon";
import LinkIcon from "../../Icons/LinkIcon";
import DangerIcon from "../../Icons/DangerIcon";
import InfoCardsLinksItem from "./InfoCardsLinkItem";


const componentStyle = {
  display: 'flex'
}
const InfoCardsLinks = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 2 }}>
      <Grid size={4} sx={componentStyle}>
        <InfoCardsLinksItem
          navigateProp="/black-list-ip"
          text="Black List IP"
          icon={<DangerIcon />}
        />
      </Grid>
      <Grid size={4} sx={componentStyle}>
        <InfoCardsLinksItem
          navigateProp="/black-list-url"
          text="Black List URL"
          icon={<LinkIcon />}
        />
      </Grid>
      <Grid size={4} sx={componentStyle}>
        <InfoCardsLinksItem
          navigateProp="/compromise-identity"
          text="Индикаторы компромитации"
          icon={<GlobusIcon />}
        />
      </Grid>
    </Grid>
  );
};

export default InfoCardsLinks;
