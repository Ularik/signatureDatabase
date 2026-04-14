import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import CalendarIcon from '../Icons/CalendarIcon';
import IpIcon from "../Icons/IpIcon";
import GeolocationIcon from '../Icons/GeolocationIcon';
import type { RowTable } from '../../../types';
import { useLocation } from 'react-router';
import UrlIcon from '../Icons/UrlIcon';
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";
import DocIcon from '../Icons/DocIcon';
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { Grid } from '@mui/material';

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

interface Props {
  rows: RowTable[];
}

const TableComponent: React.FC<Props> = ({ rows }) => {
  const { pathname } = useLocation();

  let titles = [
    <Typography>
      <IpIcon sx={{ marginRight: "10px" }} />
      Ip-адресс
    </Typography>,
    <Typography>
      <GeolocationIcon sx={{ marginRight: "10px" }} />
      Страна
    </Typography>,
    <Typography>
      <CalendarIcon sx={{ marginRight: "10px" }} />
      Дата обнаружения
    </Typography>,
  ];

  const titlesUrl = [
    <Typography>
      <UrlIcon sx={{ marginRight: "10px" }} />
      url-адресс
    </Typography>,

    <Typography>
      <CalendarIcon sx={{ marginRight: "10px" }} />
      Дата обнаружения
    </Typography>,
  ];

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

    titles = pathname === "/black-list-url" 
    ? titlesUrl 
    : pathname === "/compromise-identity" 
    ? titleSignature 
    : titles

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
          {titles.map((title) => (
            <Grid
              size={pathname === "/black-list-url" ? 6 : 4}
              justifyItems={"center"}
            >
              {title}
            </Grid>
          ))}
        </Grid>

        {rows.map((row) => (
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              alignItems: "center",
              paddingBlock: "10px",
              paddingInline: "80px",
              borderBlock: "1px solid #486084",
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": {
                background: "#283D5D",
                "& .copy-icon": {
                  opacity: 1,
                  transform: "translateX(0)",
                },
              },
            }}
          >
            {Object.values(row).map((value) => (
              <Typography textAlign={"center"} sx={{ flex: 1 }}>
                <Typography>{value}</Typography>
              </Typography>
            ))}

            <Typography
              className="copy-icon"
              sx={{
                position: "absolute",
                right: "10px",
                fontSize: "14px",
                color: "#fff",
                opacity: 0, // Скрыта по умолчанию
                transform: "translateX(-1px)", // Немного смещена для эффекта вылета
                transition: "0.3s ease-in-out",
              }}
            >
              Copy
              <ContentCopyIcon
                sx={{ height: "16px", width: "16px", marginLeft: "5px" }}
              />
            </Typography>
          </Box>
        ))}
      </Box>
    );
};


export default TableComponent;