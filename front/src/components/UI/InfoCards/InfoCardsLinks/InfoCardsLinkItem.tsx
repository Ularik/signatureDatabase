import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";


const IconStyle = {
  padding: 0,
};


interface Props {
  text: string;
  icon: React.ReactElement;
  navigateProp: string
}

const InfoCardsLinksItem: React.FC<Props> = ({ text, icon, navigateProp }) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(navigateProp)}
      sx={{
        flexGrow: 1,
        cursor: 'pointer',
        position: "relative",
        padding: "14px 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
        width: "100%",
        borderRadius: "10px",
        overflow: "hidden", // Чтобы градиент не вылезал за границы
        zIndex: 1,

        // Основной фон (синий)
        background:
          "linear-gradient(to bottom, rgba(0, 64, 163, 0.15), rgba(81, 81, 81, 0.15))",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(147, 167, 198, 0.1)",

        // Слой с оранжевым градиентом (скрытый)
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(to bottom, #EF8422, #A86222)",
          opacity: 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: -1, // Уходит под текст
        },

        "&:hover::before": {
          opacity: 1, // Плавно проявляем оранжевый слой
        },
      }}
    >
      <IconButton sx={IconStyle}>{icon}</IconButton>
      <Typography
        display="flex"
        alignItems="center"
        fontFamily={"inherit"}
        color="#F9F9F9"
        fontSize={{ xs: "10px", sm: "18px" }}
        lineHeight={"100%"}
        fontWeight={500}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default InfoCardsLinksItem;