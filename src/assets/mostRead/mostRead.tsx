import arrow from "../icons/ArrowRight.svg";
import img6 from "../imgs/Image 06.png";
import img7 from "../imgs/Image 07.png";
import img8 from "../imgs/Image 08.png";
import img9 from "../imgs/Image 09.png";

export function MostRead() {
  return (
    <section>
      <header className="text-text-secondary grid grid-cols-[1fr_1fr] border-t border-gray-700 py-4">
        <div className="justify-start">Mais lidas da semana</div>
        <div className="grid grid-cols-[auto_auto] items-center gap-2 justify-self-end">
          <p className=" hover:text-brand-light">Ver Tudo</p>
          <img src={arrow} alt="Arrow" className="h-4 w-auto " />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px] mt-4">
        <div className="grid grid-cols-1 relative">
          <img src={img6} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Veículos
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            Protótipo de veículo voador é apresentado, marcando o início da era
            dos transportes aéreos pessoais.
          </h2>
        </div>

        <div className="grid grid-cols-1 relative">
          <img src={img7} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Hologramas
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            Plataforma de videoconferência apresenta nova função de hologramas,
            tornando as chamadas virtuais mais realistas e envolventes.
          </h2>
        </div>

        <div className="grid grid-cols-1 relative">
          <img src={img8} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Realidade virtual
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            Nova geração de consoles de videogame é lançada, trazendo gráficos
            ultra-realistas e experiências de jogo totalmente envolventes.
          </h2>
        </div>

        <div className="grid grid-cols-1 relative">
          <img src={img9} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Internet
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            Projeto busca oferecer internet de alta velocidade em áreas remotas
            através de satélites.
          </h2>
        </div>
      </div>
    </section>
  );
}
