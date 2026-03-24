import img1 from "../assets/imgs/Image 01.png";
import img2 from "../assets/imgs/Image 02.png";
import img3 from "../assets/imgs/Image 03.png";
import img4 from "../assets/imgs/Image 04.png";
import img5 from "../assets/imgs/Image 05.png";
export function Highlights() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
      <div className="relative">
        <img src={img1} alt="Highlight 1" className="responsive-image" />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,black_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"></div>
        <div className="absolute inset-x-0 bottom-0 p-4 px-6">
          <figcaption>
            <span className="text-text-primary xl:text-xl title-bg">
              Robótica
            </span>
            <h2 className="text-text-primary md:text-md xl:text-2xl mt-8">
              Robôs domésticos começam a ser adotados para tarefas diárias,
              prometendo mais conforto e eficiência nas residências.
            </h2>
          </figcaption>
        </div>
      </div>
      <div className="gap-[16px] grid grid-cols-1 sm:grid-cols-2">
        <div className="relative overflow-hidden">
          <img src={img2} alt="Highlight 2" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,black_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"></div>

          <div className="absolute inset-x-0 bottom-0 p-4 px-6 overflow-hidden">
            <figcaption className="max-w-full">
              <span className="text-text-primary title-bg block truncate">
                Hologramas
              </span>
              <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
                Novo Smartphone Projetor 3D chega ao mercado, transformando a
                forma como vemos nossas telas!
              </h2>
            </figcaption>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={img3} alt="Highlight 2" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,black_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"></div>

          <div className="absolute inset-x-0 bottom-0 p-4 px-6 overflow-hidden">
            <figcaption className="max-w-full">
              <span className="text-text-primary title-bg block truncate">
                Internet
              </span>
              <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
                Tecnologia 6G chega às metrópoles brasileiras, prometendo
                revolucionar a forma como vivemos e nos comunicamos
              </h2>
            </figcaption>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={img4} alt="Highlight 2" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,black_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"></div>

          <div className="absolute inset-x-0 bottom-0 p-4 px-6 overflow-hidden">
            <figcaption className="max-w-full">
              <span className="text-text-primary title-bg block truncate">
                Vestíveis
              </span>
              <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
                Empresa lança relógio inteligente capaz de monitorar a saúde
                mental, oferecendo insights valiosos para o bem-estar pessoal.
              </h2>
            </figcaption>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img src={img5} alt="Highlight 2" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(to_top,black_0%,rgba(0,0,0,0.5)_50%,transparent_100%)]"></div>

          <div className="absolute inset-x-0 bottom-0 p-4 px-6 overflow-hidden">
            <figcaption className="max-w-full">
              <span className="text-text-primary title-bg block truncate">
                Realidade Virtual
              </span>
              <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
                Escolas adotam a tecnologia VR para proporcionar experiências
                imersivas, transformando a aprendizagem tradicional.
              </h2>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
