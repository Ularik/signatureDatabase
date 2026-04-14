import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { TextField, Typography, IconButton } from "@mui/material";
import MainButton from "../../UI/Buttons/MainButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import type { RowTable } from "../../../types";


const modalWindowStyle = {
  outline: "none",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '95%',
};

const mainContentStyle = {
  color: "#ffff",
  maxHeight: "80vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  alignItems: "center",
  borderRadius: "40px",
  background:
    "linear-gradient(to bottom, rgba(30, 58, 95, 0) 0%, rgba(30, 58, 95, 0.9) 80% )",
  boxShadow: 24,
  p: "86px 90px 86px",
  position: "relative",
};

interface Props {
  item: RowTable;
  isOpen: boolean;
  close: () => void;
}

const ModalDescription: React.FC<Props> = ({ item, isOpen, close }) => {

const text = `ОБНОВЛЕНИЕ APACHE:
# Для Debian/Ubuntu sudo apt update && sudo apt install apache2
# Для RHEL/CentOS sudo yum update httpd

ПРОВЕРКА ВЕРСИИ:
-apache2 -v
-httpd -v

ВРЕМЕННЫЕ МЕРЫ:
-Отключение модулей CGI:
-a2dismod cgi cgid
-systemctl restart apache2`;

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
              backgroundColor: "rgba(0, 0, 0, 0.5)", 
              backdropFilter: "blur(8px)", 
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

              <Box
                sx={{
                  flex: 1,
                  minHeight: 0,
                  overflowY: "auto",
                  paddingRight: "10px", 

                  "&::-webkit-scrollbar": {
                    width: "6px", 
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "transparent", 
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "rgba(200, 203, 217, 0.3)", 
                    borderRadius: "10px", 
                    border: "1px solid transparent", 
                  },
                  "&::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#EF8422", 
                  },

                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(200, 203, 217, 0.3) transparent",
                }}
              >
                <Typography
                  id="Enter"
                  variant="h6"
                  component="h2"
                  fontSize={"28px"}
                  sx={{
                    display: "flex",
                    marginBottom: "11px",
                    "&::before": {
                      content: '""',
                      display: "block",
                      border: "4px solid #EF8422",
                      borderRadius: "10px",
                      marginRight: "10px",
                    },
                  }}
                >
                  Описание
                </Typography>
                <Box
                  sx={{ border: "1px solid #C8CBD9", maxWidth: "313px", marginBottom: '25px' }}
                ></Box>
                <Typography fontSize={22} marginBottom={"38px"}>
                  Это критическая уязвимость удаленного выполнения кода (RCE) и
                  обхода путей (Path Traversal) в веб-сервере Apache HTTP Server
                  версий 2.4.49 и 2.4.50. Уязвимость представляет собой неполное
                  исправление ранее обнаруженной уязвимости CVE-2021-41773. Она
                  позволяет неаутентифицированному удаленному злоумышленнику
                  отображать содержимое файлов за пределами корневой директории
                  сервера и выполнять произвольный код на сервере при
                  определенных условиях конфигурации. Успешная эксплуатация
                  приводит к полной компрометации веб-сервера.
                </Typography>

                <Typography
                  id="Enter"
                  variant="h6"
                  component="h2"
                  fontSize={"28px"}
                  sx={{
                    display: "flex",
                    marginBottom: "11px",
                    "&::before": {
                      content: '""',
                      display: "block",
                      border: "4px solid #EF8422",
                      borderRadius: "10px",
                      marginRight: "10px",
                    },
                  }}
                >
                  Меры противодействия
                </Typography>
                <Box
                  sx={{
                    border: "1px solid #C8CBD9",
                    maxWidth: "454px",
                    marginBottom: "28px",
                  }}
                ></Box>

                <Typography
                  style={{ whiteSpace: "pre-wrap" }}
                  sx={{ whiteSpace: "pre-wrap" }}
                >
                  {text}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalDescription;
