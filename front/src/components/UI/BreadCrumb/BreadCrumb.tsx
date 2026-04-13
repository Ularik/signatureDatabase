
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
      w-[351px] 
      h-[74px] 
      
      /* Отступы и выравнивание */
      flex items-center 
      px-[78px] 
      py-[14px] 
      
      /* Фон: Градиент из боковой панели Figma */
      bg-gradient-to-b from-[#0040A3]/15 to-[#515151]/15
      backdrop-blur-md
      border border-[#93A7C6]/100
      
      /* Скругление и граница (10% прозрачности) */
      rounded-[40px] 
      border border-[#515151]/10
    "
    >
      {/* Иконка щита (оранжевая) */}
      <div className="text-[#EF8422] me-[8px]">
        <img src={svg} alt="protect-svg" />
      </div>

      {/* Текстовый блок */}
      <div className="flex flex-col">
        <span className="text-white text-[24px] uppercase">{title}</span>
        <span className="text-[#93A7C6] text-[16px] whitespace-nowrap">
          {text}
        </span>
      </div>
    </div>
  );
};

export default BreadCrumb;
