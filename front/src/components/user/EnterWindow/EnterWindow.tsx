import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField, Typography, IconButton, Grid } from "@mui/material";
import MainButton from "../../UI/Buttons/MainButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LogoBackSvg from "../../../assets/logoBack.svg";


const modalWindowStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw", // На маленьких экранах занимает 90% ширины вьюпорта
  maxWidth: "682px",
  display: "grid",
  gridTemplateColumns: "1fr",
};


const mainContentStyle = {
  gap: { xs: "15px", sm: "25px", md: "45px" },
  color: "#ffff",
  alignItems: "center",
  width: "100%",
  borderRadius: "40px",
  background: `linear-gradient(to bottom, rgba(30, 58, 95, 0.1) 0%, rgba(30, 58, 95, 0.9) 80% ), url(${LogoBackSvg})`,
  backgroundSize: "contain", 
  backgroundPosition: "center", 
  backgroundRepeat: "no-repeat",
  boxShadow: 24,
  p: "44px 0 60px",
  position: "relative",
};


const labelStyle = {
  fontSize: {xs: "14px", sm: "16px"},
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginBottom: "10px",
  "&::before": {
    content: '""',
    display: "block",
    borderRadius: "10px",
    marginRight: "8px",
    border: "4px solid #EF8422",
    height: "29px",
    boxSizing: "border-box",
  },
};


const inputStyle = {
  marginBottom: {xs: "10px", sm: "17px"},
  "& .MuiOutlinedInput-root": {
    height: "38px",
    backgroundColor: "#FBFBFB",
    borderRadius: {xs: "10px", md: "30px"},
    paddingRight: "10px",
    fontSize: "14px",

    // Убираем рамку в обычном состоянии
    "& fieldset": {
      border: "none",
    },
    // Убираем рамку при наведении
    "&:hover fieldset": {
      border: "none",
    },
    // Убираем рамку при фокусе
    "&.Mui-focused fieldset": {
      border: "none",
    },
  },
  // Настройка самого поля ввода (отступы текста)
  "& .MuiInputBase-input": {
    padding: "0 16px",
    height: "100%",
  },
};


interface Props {
    isOpen: boolean;
    close: () => void;
}

const EnterWindow: React.FC<Props> = ({ isOpen, close }) => {

  return (
    <div>
      <Modal
        aria-labelledby="Enter account"
        aria-describedby="Enter account"
        open={isOpen}
        onClose={() => close()}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.3)", // Цвет затенения
              backdropFilter: "blur(8px)", // Эффект размытия
            },
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={modalWindowStyle}>
            <Grid container direction={"column"} sx={mainContentStyle}>
              <IconButton
                onClick={() => close()}
                sx={{
                  position: "absolute",
                  top: { xs: "20px", sm: "40px" },
                  right: { xs: "26px", sm: "46px" },
                }}
              >
                <HighlightOffIcon
                  sx={{ color: "#C8CBD9", height: "32px", width: "32px" }}
                />
              </IconButton>
              <Grid>
                <Typography
                  id="Enter"
                  variant="h6"
                  component="h2"
                  fontSize={{ xs: 20, sm: 26, md: 32 }}
                  textAlign={"center"}
                  sx={{
                    "&::after": {
                      content: '""',
                      display: "block",
                      border: "1px solid #C8CBD9",
                      maxWidth: "300px",
                      width: "50vw",
                      flex: 1,
                    },
                  }}
                >
                  Вход в систему
                </Typography>
              </Grid>
              <Grid size={{xs: 10, sm: 8 }}>
                <Box component={"form"}>
                  <Typography sx={labelStyle}>Логин:</Typography>
                  <TextField variant="outlined" fullWidth sx={inputStyle} />

                  <Typography sx={labelStyle}>Пароль:</Typography>
                  <TextField variant="outlined" fullWidth sx={inputStyle} />
                </Box>
              </Grid>

              <Grid size={{ xs: 10, sm: 2 }}>
                <MainButton
                  text="Войти"
                  padding={{ xs: "10px 32px" }}
                  fonts={{ xs: "10px", sm: "16px" }}
                  borderRadius={{ xs: "10px", sm: "60px" }}
                />
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EnterWindow;
