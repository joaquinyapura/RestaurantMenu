import React from "react";

export const CardItem = ({ item }) => {
  return (
    <a
      href="#"
      className="col-span-1 flex flex-col items-center bg-slate-100 shadow-xl p-2  w-[400px] rounded-md hover:scale-110 transition-all ease-out duration-500"
    >
      <img
        src={item.imgurl}
        alt={`imagen de ${item.name} `}
        className="w-[200px]"
        srcset=""
      />
      <div className="flex gap-2">
        <h4 className="text-3xl font-bold"> {item.name} </h4>
        <p className="text-orange-600 font-semibold"> ${item.price} </p>
      </div>
      <p className="text-neutral-500"> {item.description} </p>
      <p className="text-orange-600"> {item.ingredients} </p>
    </a>
  );
};
