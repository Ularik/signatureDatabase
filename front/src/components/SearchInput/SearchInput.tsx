import MainButton from "../UI/Buttons/MainButton";
import { Box } from "@mui/material";


const SearchInput = () => {
    return (
      <Box
        maxWidth={910}
        marginInline={"auto"}
        marginBottom={"60px"}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <input
          type="text"
          placeholder="Введите IP или URL..."
          className="
            w-full
            placeholder:text-gray-900
            placeholder:text-[20px]
            max-w-[772px]
            bg-white
            px-6 py-3
            rounded-[30px]

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

        <MainButton text={"Поиск"} padding="10px 36px" />
      </Box>
    );
};

export default SearchInput;