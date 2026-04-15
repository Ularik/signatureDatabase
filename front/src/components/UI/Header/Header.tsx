import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../../../assets/logo.svg";
import { styled } from "@mui/material";
import NavBar from "./NavBar";
import { NavLink } from "react-router";


const LogoText = styled(Typography)({
    fontFamily: "Molengo, sans-serif",
    style: 'Regular',
    textWrap: 'wrap',
    fontSize: '16px',
    lineHeight: "100%",
});

const Header = () => {

    return (
      <AppBar
        position="static"
        elevation={0}
        sx={{
          zIndex: -2,
          backgroundColor: "transparent",
          boxShadow: "none",

          paddingTop: "43.5px",
          marginBottom: "45px",
        }}
      >

        <Container maxWidth={false} sx={{ maxWidth: "1442px", paddingInline: {sm: '8px', md: '16px'} }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: '10px', sm: '30px'}
            }}
            disableGutters
          >
            <Box maxWidth={468} sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                component={NavLink}
                to="/"
                aria-label="menu"
                sx={{ padding: "0", marginRight: "10px" }}
              >
                <Box
                  component="img"
                  src={Logo}
                  alt="logo"
                  sx={{
                    // xs: мобильные устройства, sm: планшеты, md: десктопы
                    width: {
                      xs: 40, // На самых маленьких экранах
                      sm: 60, // От 600px и выше
                      md: 75, // От 900px и выше
                    },
                    height: "auto", // Автоматическая высота сохранит пропорции
                    display: "block",
                  }}
                />
              </IconButton>

              <LogoText sx={{ lineHeight: 1.3, fontSize: {xs: 12, sm: 16} }}>
                Координационный центр по обеспечению кибербезопасности
                Кыргызской Республики
              </LogoText>
            </Box>

            <NavBar />
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;