
interface Props {
    svg: string;
    title: string;
    text: string
}

const BreadCrumb: React.FC<Props> = ({ title, text, svg }) => {
  return (
    <div
      className="
      /* Размеры из макета */
      xs:flex-1
      
      max-w-[351px]
      
      /* Отступы и выравнивание */
      flex items-center justify-center
      px-[5px]
      md:px-[20px]
      lg:px-[40px]
      xl:px-[75px] 
      
      py-[10px]

      
      xl:py-[6px] 
      
      /* Фон: Градиент из боковой панели Figma */
      bg-gradient-to-b from-[#0040A3]/15 to-[#515151]/15
      backdrop-blur-md
      border border-[#93A7C6]/100
      
      /* Скругление и граница (10% прозрачности) */
      rounded-[10px]
      md:rounded-[30px] 
      border border-[#515151]/10
    "
    >
      {/* Иконка щита (оранжевая) */}
      <div className="text-[#EF8422] me-[4px] lg:me-[8px]">
        <img src={svg} alt="protect-svg" />
      </div>

      {/* Текстовый блок */}
      <div className="flex flex-col">
        <span className="text-white text-[12px] sm:text-[18px] md:text-[24px] uppercase">
          {title}
        </span>
        <span className="text-[#93A7C6] text-[10px] sm:text-[14px] md:text-[16px] whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};

export default BreadCrumb;
