import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router";


interface Props {
    title: string;
    navigate?: string;
    text: string
}

const InfoCard:React.FC<Props> = ({ title, navigate, text }) => {
  return (
    <Box
      component={NavLink}
      to={navigate ? navigate : ''}
      
      sx={{
        position: "relative",
        padding: "10px 36px",
        display: "flex",
        flexDirection: "column",
        gap: "13px",
        maxWidth: "460px",
        borderRadius: "40px",
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
      <Box
        display={"flex"}
        gap={"12px"}
        paddingBlock={"5px"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Box
          border={"4px solid #EF8422"}
          borderRadius={"10px"}
          height={"49px"}
        ></Box>
        <Typography
          display="flex"
          alignItems="center"
          fontFamily={"inherit"}
          color="#F9F9F9"
          fontSize={"24px"}
          lineHeight={"100%"}
          fontWeight={500}
        >
          {title}
        </Typography>
      </Box>
      <Box borderBottom={"1px solid #D1DCED"}></Box>
      <Typography color="#F9F9F9" fontSize={"20px"}>
        {text}
      </Typography>
    </Box>
  );
};

export default InfoCard;