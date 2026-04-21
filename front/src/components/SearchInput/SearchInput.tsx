import MainButton from "../UI/Buttons/MainButton";
import { Grid } from "@mui/material";


const SearchInput = () => {
    return (
      <Grid
        container
        maxWidth={910}
        marginInline={"auto"}
        marginBottom={{xs: "30px", md: "40px", xl:"60px"}}
        textAlign={"center"}
        flexWrap={"wrap"}
        spacing={"10px"}
      >
        <Grid size={{ xs: 12, sm: 10 }}>
          <input
            type="text"
            placeholder="Введите IP или URL..."
            className="
            w-full
            placeholder:text-gray-900
            bg-[#ecebeb]
            sm:bg-white
            /* Меньший шрифт и отступы для мобилок (xs) */
            placeholder:text-[16px] 
            px-4 py-2 
            
            /* Увеличение на экранах от sm (640px) и выше */
            sm:placeholder:text-[20px]
            sm:px-6 sm:py-3

            rounded-[10px]
            sm:rounded-[30px]

            outline-none       /* Убирает стандартный контур браузера */
            focus:ring-1       /* Убирает кольцо Tailwind (если включено) */
            focus:border-none  /* Убирает изменение границы */
            border-none        /* Убирает границу в принципе */
            /* Базовое состояние границы (прозрачная, чтобы не прыгала верстка) */

            ring-2
            ring-transparent
            transition-all
            
            focus:ring-[#EF8422]
            "
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 2 }}>
          <MainButton
            text={"Поиск"}
            padding={{ xs: "8px", sm: "10px 36px" }}
            fonts={{ xs: "12px", sm: "16px" }}
            borderRadius={{xs: '10px', sm: '60px'}}
          />
        </Grid>
      </Grid>
    );
};

export default SearchInput;