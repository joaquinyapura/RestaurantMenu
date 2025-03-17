import { useState } from "react";
import { Categorias } from "../Constants/index.jsx";
import { Resultados } from "./Resultados.jsx";

export const MainContainer = () => {
  const [selectedCategory, setselectetCategory] = useState(null);

  const handleClick = (v) => {
    setselectetCategory(v);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold mt-6 text-gray-600">
          Explore our categories
        </h1>
      </div>
      <div className="flex mt-10 gap-4">
        {Categorias.map((e, i) => (
          <a
            onClick={() => handleClick(e.text)}
            id={e.text}
            key={i}
            href="#"
            className="rounded-lg px-4 w-[150px] h-[150px] text-4xl text-orange-600  flex flex-col gap-4 justify-center items-center shadow-lg hover:scale-110 transition-all ease-in-out duration-500"
          >
            <div>{e.icon}</div>
            <div>
              <p className="text-gray-600  text-lg font-light">{e.text}</p>
            </div>
          </a>
        ))}
      </div>
      {selectedCategory && <Resultados categoria={selectedCategory} />}
    </div>
  );
};
