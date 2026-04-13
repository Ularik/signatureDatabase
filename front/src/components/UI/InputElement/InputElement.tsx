import { TextField, InputAdornment } from "@mui/material";
import { Box, Button } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";


const InputElement = () => {
  return (
    <>
      <Box
        marginLeft={"auto"}
        display={"flex"}
        alignItems={"center"}
        maxWidth={"482px"}
        marginRight={"19px"}
        marginBottom={"23px"}
      >
        <Button
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
        <TextField
          placeholder="Поиск..." // Если нужен текст внутри
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
