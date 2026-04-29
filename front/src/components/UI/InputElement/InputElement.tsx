import { TextField, InputAdornment } from "@mui/material";
import { Box, Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Grow } from "@mui/material";
import type { SearchFilterCompromiseItems } from "../../../types";


interface Props {
  searchFilters: SearchFilterCompromiseItems[];
  searchFunc: (item: SearchFilterCompromiseItems) => void;
}

const InputElement: React.FC<Props> = ({ searchFilters, searchFunc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const [searchQueryParams, setSearchQueryParams] =
    useState<SearchFilterCompromiseItems>(searchFilters[0]);

  const search = () => {
    if (searchItem.trim() === "") return;
  
    searchFunc({...searchQueryParams, item: searchItem});
  };

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        marginLeft={"auto"}
        display={{ xs: "none", sm: "flex" }}
        alignItems={"center"}
        maxWidth={"482px"}
        marginRight={"19px"}
        marginBottom={"23px"}
      >
        <Box position={"relative"}>
          <Button
            onClick={toggleMenu}
            sx={{
              "& .MuiButton-startIcon": {
                marginRight: "4px", // По умолчанию 8px
                marginLeft: "0px",
              },
              "& .MuiButton-endIcon": {
                marginLeft: "4px", // По умолчанию 8px
                marginRight: "0px",
              },
              minWidth: "auto",
              padding: "9px 8px",
            }}
            startIcon={
              <FilterAltOutlinedIcon
                sx={{ color: "#FFFFFF", height: "23.75px", width: "25px" }}
              />
            }
            endIcon={
              <KeyboardArrowDownIcon
                sx={{ color: "#FFFFFF", height: "24px", width: "24px" }}
              />
            }
          ></Button>
          {/* Всплывающее окно — рендерится только если isOpen === true */}
          <Grow
            in={isOpen}
            style={{ transformOrigin: "top center" }} // Точка, откуда "растет" окно
            {...(isOpen ? { timeout: 300 } : {})} // Скорость анимации
          >
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)", // Центрирование
                zIndex: 100,
                width: "195px",
                mt: "10px",

                backgroundColor: "#1B3351",
                borderRadius: "12px",
                boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {searchFilters.map((value) => (
                <Button
                  onClick={() => setSearchQueryParams(value)}
                  key={value.key}
                  variant="text"
                  sx={{ color: "white" }}
                >
                  {value.item}
                </Button>
              ))}
            </Box>
          </Grow>
        </Box>

        <TextField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchItem(e.target.value)
          }
          value={searchItem}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              search();
            }
          }}
          placeholder="Поиск..."
          variant="outlined"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "32px",
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
          }}
          InputProps={{
            // Добавляем иконку лупы в конец (End Adornment)
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  onClick={search}
                  sx={{
                    color: "#000000",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default InputElement;
