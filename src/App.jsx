import { Header } from "./Components/Header";
import { MainContainer } from "./Components/MainContainer";

function App() {
  return (
    <div className=" app  bg-slate-100">
      <Header />
      <main className="max-w-[1980px] px-4">
        <MainContainer />
      </main>
      {/* Menu */}
    </div>
  );
}

export default App;
