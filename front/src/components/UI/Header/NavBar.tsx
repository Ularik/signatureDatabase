import { Box } from "@mui/material";
import { NavLink } from "react-router";
import MainButton from "../Buttons/MainButton";
import { useState } from "react";
import EnterWindow from "../../user/EnterWindow/EnterWindow";
import { useLocation } from "react-router";
import type { User } from "../../../types";
import { useAppDispatch } from "../../../app/hooks";
import { delUser } from "../../user/store/userSlice";


interface Props {
  user: User | null;
}

const NavBar: React.FC<Props> = ({ user }) => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const logoutFunc = async () => {
    try {
      dispatch(delUser());
    } catch(err) {
      console.log(err);
    }
  }

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
          <Box
            fontSize={"18px"}
            component={NavLink}
            to="/black-list-url"
            color={"inherit"}
            sx={BtnStyle}
          >
            Black List URL
          </Box>
          <Box
            fontSize={"18px"}
            component={NavLink}
            to="/black-list-ip"
            color={"inherit"}
            sx={BtnStyle}
          >
            Black List IP
          </Box>
          <Box
            fontSize={"18px"}
            component={NavLink}
            to="/compromise-identity"
            color={"inherit"}
            sx={BtnStyle}
          >
            Идентификаторы компромитации
          </Box>

          {user ? (
            <MainButton
              text="Выйти"
              onClick={logoutFunc}
              padding={{ xs: "6px 18px", sm: "8px 22px", md: "10px 36px" }}
              fonts={{ xs: "12px", sm: "16px" }}
              borderRadius={{ xs: "60px" }}
            />
          ) : (
            <MainButton
              text="Войти"
              onClick={handleOpen}
              padding={{ xs: "6px 18px", sm: "8px 22px", md: "10px 36px" }}
              fonts={{ xs: "12px", sm: "16px" }}
              borderRadius={{ xs: "60px" }}
            />
          )}
        </Box>
      </>
    );
};


export default NavBar;