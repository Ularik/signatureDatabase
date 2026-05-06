import { useState } from "react";
import MainButton from "../UI/Buttons/MainButton";
import { Grid, TextField } from "@mui/material";
import type { SearchQueryParamsItems } from "../../types";


interface Props {
  searchFunc: (item: SearchQueryParamsItems) => void;
}

const SearchInput: React.FC<Props> = ({ searchFunc }) => {

  const [searchItem, setSearchItem] = useState("");
  
    const search = () => {
      if (searchItem.trim() === "") return;
      searchFunc({ key: 'current', item: searchItem});
    };
    
    return (
      <Grid
        container
        maxWidth={910}
        marginInline={"auto"}
        marginBottom={{ xs: "30px", md: "40px", xl: "60px" }}
        textAlign={"center"}
        flexWrap={"wrap"}
        spacing={"10px"}
      >
        <Grid size={{ xs: 12, sm: 10 }}>
          <TextField
            fullWidth
            placeholder="Введите IP или URL..."
            variant="outlined"
            value={searchItem}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchItem(e.target.value)
            }
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === "Enter") {
                search();
              }
            }}
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: { xs: "#ecebeb", sm: "#ffffff" },
                borderRadius: { xs: "10px", sm: "30px" },
                transition: "all 0.2s ease-in-out",
                padding: { xs: "0px 2px", sm: "1px 8px" },

                "& fieldset": {
                  border: "none",
                  ring: "2px",
                  ringColor: "transparent",
                },

                "&:hover fieldset": {
                  border: "none",
                },

                // Стили при фокусе (заменяет focus:ring-[#EF8422])
                "&.Mui-focused fieldset": {
                  border: "2px solid #EF8422",
                },
              },

              // Стили самого input (текста и плейсхолдера)
              "& .MuiInputBase-input": {
                color: "#000",
                fontSize: { xs: "16px", sm: "20px" },
                "&::placeholder": {
                  color: "#111827", // gray-900
                  opacity: 1, // В MUI по умолчанию прозрачность ниже
                },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 2 }}>
          <MainButton
            text={"Поиск"}
            padding={{ xs: "8px", sm: "10px 36px" }}
            fonts={{ xs: "12px", sm: "16px" }}
            borderRadius={{ xs: "10px", sm: "60px" }}
          />
        </Grid>
      </Grid>
    );
};

export default SearchInput;