import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import DocIcon from "../Icons/DocIcon";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Grid } from "@mui/material";
import LockIcon from "../Icons/LockIcon";
import MainButton from "../Buttons/MainButton";


const NotAuthTable = () => {
  const titleSignature = [
    <Typography>
      <GppMaybeOutlinedIcon sx={{ marginRight: "10px" }} />
      Уязвимости (CVE)
    </Typography>,
    <Typography>
      <DocIcon sx={{ marginRight: "10px" }} />
      Сигнатура
    </Typography>,
    <Typography>
      <CreateOutlinedIcon sx={{ marginRight: "8px" }} />
      Описание
    </Typography>,
  ];

  return (
    <Box
      component={Paper}
      sx={{
        backgroundColor: "inherit",
        display: "flex",
        flexDirection: "column",
        gap: "11px",
        color: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backdropFilter: "blur(8px)",
          borderRadius: "20px",
          background:
            "linear-gradient(to bottom, rgba(30, 58, 95, 0) 0%, rgba(30, 58, 95, 0.9) 80% )",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 25px 50px -12px rgba(0, 0, 0, 0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LockIcon sx={{ height: "71px", width: "65px", marginBottom: '35px' }} />
        <Typography fontSize={'30px'} maxWidth={'793px'} textAlign={'center'} marginBottom={'88px'}>
          Доступно только для зарегистрированных пользователей
        </Typography>
        <MainButton text="Войти в систему" padding="11px 102px" />

      </Box>

      <Grid
        container
        spacing={3}
        id="title"
        paddingBlock={"15.84px"}
        sx={{
          paddingInline: "80px",
          background: "#283D5D",
        }}
      >
        {titleSignature.map((title, index) => (
          <Grid size={4} key={index} justifyItems={"center"}>
            {title}
          </Grid>
        ))}
      </Grid>

      <Box height={"340px"}></Box>
    </Box>
  );
};

export default NotAuthTable;
