import { Menu } from "../Constants/index.jsx";
import { CardItem } from "./CardItem.jsx";
export const Resultados = ({ categoria }) => {
  const FilteredMenu = Menu.filter((e) => e.category == categoria);

  return (
    <div className="mt-10 w-full bg-slate-200 min-h-[600px] flex justify-center py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
        {FilteredMenu.map((e, i) => (
          <CardItem key={i} item={e} />
        ))}
      </div>
    </div>
  );
};
