import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../../../assets/logo.svg";
import { styled } from "@mui/material";
import MainButton from "../Buttons/MainButton";
import NavBar from "./NavBar";
import { useLocation } from "react-router";
import { useState } from "react";
import { NavLink } from "react-router";
import EnterWindow from "../../user/EnterWindow/EnterWindow";


const LogoText = styled(Typography)({
    fontFamily: "Molengo, sans-serif",
    style: 'Regular',
    textWrap: 'wrap',
    fontSize: '16px',
    lineHeight: "100%",
});

const Header = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <EnterWindow isOpen={open} close={handleClose} />

        <Container maxWidth={false} sx={{ maxWidth: "1442px" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
            disableGutters
          >
            <Box
              height={75}
              maxWidth={468}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <IconButton
                size="small"
                edge="start"
                color="inherit"
                component={NavLink}
                to="/"
                aria-label="menu"
                sx={{ padding: "none" }}
              >
                <Box
                  component="img"
                  src={Logo}
                  alt="logo"
                  sx={{ width: 75, height: 75 }}
                />
              </IconButton>

              <LogoText>
                Координационный центр по обеспечению кибербезопасности
                Кыргызской Республики
              </LogoText>
            </Box>

            {location.pathname !== "" && <NavBar />}

            <MainButton
              text={"Войти"}
              onClick={handleOpen}
              padding="10px 36px"
            />
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Header;