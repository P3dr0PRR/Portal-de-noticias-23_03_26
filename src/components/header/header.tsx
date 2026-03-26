import listIcon from "../../assets/icons/List.svg";
import logo from "../../assets/Logo.svg";
import search from "../../assets/icons/MagnifyingGlass.svg";

export function Header() {
  return (
    <header className="">
      <nav
        id="Primary"
        className="grid grid-cols-[1fr_auto_1fr] items-center px-4 py-2"
      >
        <div className="grid grid-flow-col auto-cols-max items-center gap-2 justify-self-start">
          <img src={listIcon} alt="List" className="h-4 sm:h-6 md:h-8 w-auto" />
          <h2 className="text-text-primary">menu</h2>
        </div>

        <div className="justify-self-center">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="grid grid-flow-col auto-cols-max items-center gap-2 justify-self-end">
          <h2 className="text-text-primary">buscar</h2>
          <img src={search} alt="List" className="h-4 sm:h-6 md:h-8 w-auto" />
        </div>
      </nav>

      <nav
        id="Secondary"
        className="text-text-primary grid grid-cols-2 py-[14px] px-[32px] gap-4 md:grid-cols-7 items-center justify-items-center text-center border-y border-gray-700"
      >
        <a href="#" className="hover:text-brand-light">
          Inteligencia Arttificial
        </a>
        <a href="#" className="hover:text-brand-light">
          Blockchain
        </a>
        <a href="#" className="hover:text-brand-light">
          Hologramas
        </a>
        <a href="#" className="hover:text-brand-light">
          Internet
        </a>
        <a href="#" className="hover:text-brand-light">
          Vestíveis
        </a>
        <a href="#" className="hover:text-brand-light">
          Realidade Aumentada
        </a>
        <a href="#" className="hover:text-brand-light">
          Realidade Virtual
        </a>
      </nav>
    </header>
  );
}
