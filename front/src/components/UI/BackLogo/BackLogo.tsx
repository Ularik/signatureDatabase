import { Box } from "@mui/material";
import BackGroundSvg from "../../../assets/logoBack.svg";


const BackLogo = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        // Смещаем на -50% от собственной ширины и высоты для идеального центра
        transform: "translate(-50%, -50%)",
        zIndex: 1, // Если это фон, обычно ставят -1
        pointerEvents: "none", // Чтобы логотип не мешал кликать по кнопкам
      }}
    >
      <img
        style={{
          height: "932px",
          width: "913px",
          display: "block",
        }}
        src={BackGroundSvg}
        alt="cert-logo"
      />
    </Box>
  );
};

export default BackLogo;