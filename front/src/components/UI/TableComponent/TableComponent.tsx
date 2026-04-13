import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import CalendarIcon from '../Icons/CalendarIcon';
import IpIcon from "../Icons/IpIcon";
import GeolocationIcon from '../Icons/GeolocationIcon';
import type { RowTable } from '../../../types';
import { useLocation } from 'react-router';
import UrlIcon from '../Icons/UrlIcon';
import GppMaybeOutlinedIcon from "@mui/icons-material/GppMaybeOutlined";


interface Props {
  rows: RowTable[];
}

const TableComponent: React.FC<Props> = ({rows}) => {
  const { pathname } = useLocation();

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
          id="title"
          paddingBlock={"15.84px"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingInline: "80px",
            background: "#283D5D",
          }}
        >
          <Typography>
            {pathname === "/black-list-url" ? (
              <>
                <UrlIcon sx={{ marginRight: "10px" }} />
                url-адресс
              </>
            ) : (
              <>
                <IpIcon sx={{ marginRight: "10px" }} />
                Ip-адресс
              </>
            )}
          </Typography>
          {pathname === "/black-list-ip" ? (
            <Typography>
              <GeolocationIcon sx={{ marginRight: "10px" }} />
              Страна
            </Typography>
          ) : pathname === "/compromise-identity" ? (
            <Typography>
              <GeolocationIcon sx={{ marginRight: "10px" }} />
              Сигнатура
            </Typography>
          ) : null}
          <Typography>
            <CalendarIcon sx={{ marginRight: "10px" }} />
            Дата обнаружения
          </Typography>
        </Box>

        {rows.map((row) => (
          <Box
            sx={{
              paddingBlock: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingInline: "80px",
              borderBlock: "1px solid #486084",
            }}
          >
            <Typography>{row.name}</Typography>
            {row.country ? <Typography>{row.country}</Typography> : null}

            <Typography width={"170px"} textAlign={"center"}>
              {row.dateDetermine}
            </Typography>
          </Box>
        ))}
      </Box>
    );
};


export default TableComponent;