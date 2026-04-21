import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MainButton from "../Buttons/MainButton";
import { useState } from "react";
import EnterWindow from "../../user/EnterWindow/EnterWindow";
import { useLocation } from "react-router";


const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const BtnStyle = {
    transition: "0.3s",
    whiteSpace: "nowrap",
    display: { xs: 'none', lg: location.pathname !== '/' ? 'block' : 'none' },
    "&:hover": {
      color: "#EF8422",
    },
  };

    return (
      <>
        <EnterWindow isOpen={open} close={handleClose} />

        <Box
          display={"flex"}
          justifyContent={{ xs: "flex-end", lg: "space-between" }}
          alignItems={"center"}
          gap={{ xs: "6px", lg: "30px" }}
        >
          <IconButton
            sx={{
              padding: 0,
              display: { lg: location.pathname !== "/" ? "none" : "block" },
              justifySelf: { xs: "end" },
              color: "white",
              ml: "auto",
            }}
          >
            <MenuRoundedIcon
              sx={{ height: { xs: "27px", sm: "36px" }, width: "auto" }}
            />
          </IconButton>
          <Box
            fontSize={"18px"}
            component={NavLink}
            to="#"
            color={"inherit"}
            sx={BtnStyle}
          >
            Black List URL
          </Box>
          <Box
            fontSize={"18px"}
            component={NavLink}
            to="#"
            color={"inherit"}
            sx={BtnStyle}
          >
            Black List IP
          </Box>
          <Box
            fontSize={"18px"}
            component={NavLink}
            to="#"
            color={"inherit"}
            sx={BtnStyle}
          >
            Идентификаторы компромитации
          </Box>

          <MainButton
            text={"Войти"}
            onClick={handleOpen}
            padding={{ xs: "6px 18px", sm: "10px 36px" }}
            fonts={{ xs: "12px", sm: "16px" }}
            borderRadius={{ xs: "60px"}}
          />
        </Box>
      </>
    );
};


export default NavBar;