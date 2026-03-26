import arrow from "../../assets/icons/ArrowRight.svg";
import img10 from "../../assets/imgs/Image 10.png";
import img11 from "../../assets/imgs/Image 11.png";
import img12 from "../../assets/imgs/Image 12.png";
import img13 from "../../assets/imgs/Image 13.png";
import img14 from "../../assets/imgs/Image 14.png";
import img15 from "../../assets/imgs/Image 15.png";
import img16 from "../../assets/imgs/Image 16.png";
import img17 from "../../assets/imgs/Image 17.png";
import img18 from "../../assets/imgs/Image 18.png";
import ads from "../../assets/Ads.png";
export function GeralContent() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[32px] items-start">
      <div>
        <header className="text-text-secondary grid grid-cols-[1fr_1fr] border-t border-gray-700 py-4">
          <div className="justify-start">
            Destaques de Inteligência Artificial
          </div>
          <div className="grid grid-cols-[auto_auto] items-center gap-2 justify-self-end">
            <p className="hover:text-brand-light">Ver Tudo</p>
            <img src={arrow} alt="Arrow" className="h-4 w-auto" />
          </div>
        </header>

        <div className="grid grid-cols-[1fr_auto] gap-6 mt-4 items-start border-b border-gray-700 pb-6">
          <div className="grid grid-cols-1 gap-2">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-3 py-1 w-fit">
              Inteligência Artificial
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Empresa surpreende o mundo ao anunciar um algoritmo capaz de
              prever eventos futuros com alta precisão.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              Em um avanço surpreendente da inteligência artificial, uma empresa
              anuncia o desenvolvimento de um algoritmo capaz de prever eventos
              futuros com notável precisão. Descubra como essa tecnologia está
              desafiando as fronteiras da previsão e quais são as implicações
              para diversas áreas, desde finanças até planejamento estratégico.
            </p>
          </div>
          <div className="w-40 h-28 overflow-hidden shrink-0">
            <img
              src={img10}
              alt="Image 10"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-6 mt-6 items-start border-b border-gray-700 pb-6">
          <div className="grid grid-cols-1 gap-2">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-3 py-1 w-fit">
              Inteligência Artificial
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Dispositivo portátil promete traduzir instantaneamente diferentes
              idiomas, facilitando a comunicação global.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              Em um mundo cada vez mais conectado, a comunicação sem fronteiras
              é essencial. Nesse contexto, um dispositivo portátil surge como um
              verdadeiro herói linguístico, prometendo quebrar as barreiras
              idiomáticas instantaneamente. Imagine poder se comunicar
              fluentemente em qualquer lugar do mundo, independentemente do
              idioma local.
            </p>
          </div>
          <div className="w-40 h-28 overflow-hidden shrink-0">
            <img
              src={img11}
              alt="Image 11"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-6 mt-6 items-start border-b border-gray-700 pb-6">
          <div className="grid grid-cols-1 gap-2">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-3 py-1 w-fit">
              Inteligência Artificial
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Criados para auxiliar idosos, robôs de companhia ganham
              popularidade, oferecendo suporte emocional e físico aos usuários.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              A tecnologia não só avança, mas também busca tornar a vida mais
              significativa para todas as gerações. No cenário atual, os robôs
              sociais, projetados especialmente para oferecer apoio e companhia
              aos idosos, estão ganhando destaque.
            </p>
          </div>
          <div className="w-40 h-28 overflow-hidden shrink-0">
            <img
              src={img12}
              alt="Image 12"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-6 mt-6 items-start">
          <div className="grid grid-cols-1 gap-2">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-3 py-1 w-fit">
              Inteligência Artificial
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Aplicativo utiliza inteligência artificial para ajudar usuários a
              manterem o foco e aumentarem a produtividade no dia a dia.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              No turbilhão da vida moderna, onde distrações são abundantes, um
              aplicativo inovador surge como um aliado indispensável para quem
              busca maior concentração e eficiência no cotidiano. Utilizando
              avançados algoritmos de inteligência artificial, este aplicativo
              promete mais do que simplesmente gerenciar tarefas.
            </p>
          </div>
          <div className="w-40 h-28 overflow-hidden shrink-0">
            <img
              src={img13}
              alt="Image 13"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <aside>
        <div>
          <img src={ads} alt="ads" className="w-full responsive-image" />
        </div>
        <header className="text-text-secondary grid grid-cols-[1fr_1fr] border-t border-gray-700 py-4 mt-4">
          <div className="justify-start">Viu isso aqui?</div>
          <div className="grid grid-cols-[auto_auto] items-center gap-2 justify-self-end">
            <p className="hover:text-brand-light">Ver Tudo</p>
            <img src={arrow} alt="Arrow" className="h-4 w-auto" />
          </div>
        </header>

        <div className="grid grid-cols-[auto_1fr] gap-4 mt-4 items-start border-b border-gray-700 pb-4">
          <div className="w-20 h-16 overflow-hidden shrink-0">
            <img
              src={img14}
              alt="Image 14"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-2 py-0.5 w-fit">
              Software
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Aplicativo de monitoramento ambiental ganha destaque, incentivando
              práticas ecológicas e promovendo a conscientização.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 mt-4 items-start border-b border-gray-700 pb-4">
          <div className="w-20 h-16 overflow-hidden shrink-0">
            <img
              src={img15}
              alt="Image 15"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-2 py-0.5 w-fit">
              Realidade Virtual
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Óculos de realidade virtual com feedback tátil proporcionam uma
              experiência sensorial completa, imergindo usuários em ambientes
              digitais.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 mt-4 items-start border-b border-gray-700 pb-4">
          <div className="w-20 h-16 overflow-hidden shrink-0">
            <img
              src={img16}
              alt="Image 16"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-2 py-0.5 w-fit">
              Criptomoedas
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Surge uma nova moeda digital baseada em tecnologias sustentáveis,
              buscando minimizar o impacto ambiental associado à mineração de
              criptomoedas.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 mt-4 items-start border-b border-gray-700 pb-4">
          <div className="w-20 h-16 overflow-hidden shrink-0">
            <img
              src={img17}
              alt="Image 17"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-2 py-0.5 w-fit">
              Drones
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Empresas de e-commerce implementam frota de drones para entregas
              rápidas, transformando o cenário do comércio online.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 mt-4 items-start">
          <div className="w-20 h-16 overflow-hidden shrink-0">
            <img
              src={img18}
              alt="Image 18"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-1">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-2 py-0.5 w-fit">
              Impressão 3D
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Tecnologia inovadora permite a impressão 3D de órgãos humanos,
              revolucionando a medicina e a lista de espera por transplantes.
            </h2>
          </div>
        </div>
      </aside>
    </section>
  );
}
