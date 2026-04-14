import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField, Typography, IconButton } from "@mui/material";
import MainButton from "../../UI/Buttons/MainButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


const modalWindowStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};


const mainContentStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "45px",
  color: "#ffff",
  alignItems: "center",
  width: "682px",
  borderRadius: "40px",
  background:
    "linear-gradient(to bottom, rgba(30, 58, 95, 0) 0%, rgba(30, 58, 95, 0.9) 80% )",
  boxShadow: 24,
  p: "44px 0 60px",
  position: 'relative'
};


const labelStyle = {
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  width: "453px",
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
  marginBottom: "17px",
  "& .MuiOutlinedInput-root": {
    height: "38px",
    backgroundColor: "#FBFBFB",
    borderRadius: "30px",
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
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Цвет затенения
              backdropFilter: "blur(8px)", // Эффект размытия
            },
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={modalWindowStyle}>
            <Box sx={mainContentStyle}>
              <IconButton
                onClick={() => close()}
                sx={{ position: "absolute", top: "40px", right: "46px" }}
              >
                <HighlightOffIcon
                  sx={{ color: "#C8CBD9", height: "32px", width: "32px" }}
                />
              </IconButton>
              <Typography
                id="Enter"
                variant="h6"
                component="h2"
                fontSize={32}
                textAlign={"center"}
                sx={{
                  "&::after": {
                    content: '""',
                    display: "block",
                    border: "1px solid #C8CBD9",
                    width: "300px",
                    flex: 1,
                  },
                }}
              >
                Вход в систему
              </Typography>
              <Box component={"form"} maxWidth={"453px"}>
                <Typography sx={labelStyle}>Логин:</Typography>
                <TextField variant="outlined" fullWidth sx={inputStyle} />

                <Typography sx={labelStyle}>Пароль:</Typography>
                <TextField variant="outlined" fullWidth sx={inputStyle} />
              </Box>

              <MainButton text="Войти" padding="10px 32px" />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EnterWindow;
