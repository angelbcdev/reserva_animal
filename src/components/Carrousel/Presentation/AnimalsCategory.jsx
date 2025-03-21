import CategoryCard from "./CategoryCard";
import { categoryBG, leftIcon, rigthIcon } from "../../../assets/img-hero";

import "./style.css";

const AnimalsCategory = ({ animals }) => {
  return (
    <section className="relative w-[400px] md:w-[1440px] h-[660px]  flex-shrink-0 bg-cover bg-no-repeat px-[136px] pt-[86px] pb-[48px] mx-auto mb-12  overflow-hidden">
      {/* <img
        className=" absolute right-[100px] bottom-2 left-6 w-[97%]"
        src={categoryBG}
        alt="BackGround-category"
      /> */}
      <div className=" md:w-[1080px] h-[630px]  mx-auto relative  z-10">
        <div className="w-full flex flex-col items-center">
          <p className="font-semibold text-[35px]">Categorias por animales</p>
          <div className="flex">
            <p>Mira todas las carateristicas </p>
            <p className="ml-4 hover:cursor-pointer w-8 hover:font-bold">
              {">"}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[1440px] h-full flex flex-col  px-[10px] pt-[40px]">
          <div className="w-[400px] md:w-[1100px] overflow-scroll h-auto md:h-[420px] flex gap-[120px]  justify-cents  relative -left-20 ">
            {animals.map((animal, index) => (
              <CategoryCard key={index} animal={animal} />
            ))}
            <div className="h-[320px]   w-10 sm:hidden flex justify-center items-center">
              <img className="h-6" src={rigthIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-10 flex justify-center items-center text-[32px] ">
        <img className="sm:hidden" src={rigthIcon} alt="" />
      </div>
    </section>
  );
};
export default AnimalsCategory;
