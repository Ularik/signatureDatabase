import React, { type ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import InfoCardsLinks from "../UI/InfoCards/InfoCardsLinks/InfoCardsLinks";
import SearchInput from "../SearchInput/SearchInput";


interface Props {
  title: string;
  subtitle: string;
  topActions: ReactNode;
  children: ReactNode; 
  pagination?: ReactNode; 
}

const GeneralPageLayot: React.FC<Props> = ({
  title,
  subtitle,
  topActions,
  children,
  pagination,
}) => {
  return (
    <Box maxWidth={"1326px"} marginInline={"auto"} paddingBottom={"51px"}>
      <Box
        textAlign={"center"}
        color="#FFFFFF"
        marginBottom={{ xs: "10px", md: "24px" }}
      >
        <Typography
          fontSize={{ xs: "20px", sm: "30px", md: "40px" }}
          marginBottom={{ xs: "5px", md: "10px" }}
        >
          {title}
        </Typography>
        <Typography fontSize={{ xs: "12px", sm: "16px", md: "20px" }}>
          {subtitle}
        </Typography>
      </Box>

      {topActions}

      <Box
        borderRadius={{ xs: "10px", md: "20px" }}
        overflow={"hidden"}
        position={"relative"}
        border={"1px solid #486084"}
        padding={"7px 0 19px"}
        marginBottom={"13px"}
      >
        {children}
      </Box>

      {/* Пагинация */}
      {pagination && (
        <Box marginLeft={"auto"} display="flex" justifyContent="flex-end">
          {pagination}
        </Box>
      )}
    </Box>
  );
};

export default GeneralPageLayot;
