import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";


const NavBar = () => {
    return (
      <Box display={"flex"} justifyContent={"space-between"} gap={"79px"}>
        <Box
          fontSize={"18px"}
          component={NavLink}
          to="#"
          color={"inherit"}
          sx={{
            transition: "0.3s",
            "&:hover": {
              color: "#EF8422",
            },
          }}
        >
          Black List URL
        </Box>
        <Box
          fontSize={"18px"}
          component={NavLink}
          to="#"
          color={"inherit"}
          sx={{
            transition: "0.3s",
            "&:hover": {
              color: "#EF8422",
            },
          }}
        >
          Black List IP
        </Box>
        <Box
          fontSize={"18px"}
          component={NavLink}
          to="#"
          color={"inherit"}
          sx={{
            transition: "0.3s",
            "&:hover": {
              color: "#EF8422",
            },
          }}
        >
          Идентификаторы компромитации
        </Box>
      </Box>
    );
};


export default NavBar;