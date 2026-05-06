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
            Highlights of Artificial Intelligence
          </div>
          <div className="grid grid-cols-[auto_auto] items-center gap-2 justify-self-end">
            <p className="hover:text-brand-light">View All</p>
            <img src={arrow} alt="Arrow" className="h-4 w-auto" />
          </div>
        </header>

        <div className="grid grid-cols-[1fr_auto] gap-6 mt-4 items-start border-b border-gray-700 pb-6">
          <div className="grid grid-cols-1 gap-2">
            <span className="text-text-primary text-xs font-semibold uppercase bg-brand px-3 py-1 w-fit">
              Artificial Intelligence
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Company surprises the world by announcing an algorithm capable of
              predicting future events with high accuracy.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              In a surprising advance in artificial intelligence, a company
              announces the development of an algorithm capable of predicting
              future events with remarkable accuracy. Discover how this
              technology is challenging the boundaries of prediction and what
              the implications are for various areas, from finance to strategic
              planning.
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
              Artificial Intelligence
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Portable device promises to translate languages instantly,
              facilitating global communication.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              In a world that is increasingly connected, communication without
              borders is essential. In this context, a portable device emerges
              as a linguistic hero, promising to break language barriers
              instantly. Imagine being able to communicate fluently anywhere in
              the world, regardless of the local language.
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
              Artificial Intelligence
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              Created to assist the elderly, companion robots are gaining
              popularity, offering emotional and physical support to users.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              Technology not only advances but also seeks to make life more
              meaningful for all generations. In the current scenario, social
              robots, specially designed to provide support and companionship to
              the elderly, are gaining prominence.
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
              Artificial Intelligence
            </span>
            <h2 className="text-text-primary font-bold text-lg leading-snug">
              App uses artificial intelligence to help users maintain focus and
              increase productivity in daily life.
            </h2>
            <p className="text-text-secondary text-sm line-clamp-3">
              In the whirlwind of modern life, where distractions are abundant,
              an innovative app emerges as an indispensable ally for those
              seeking greater concentration and efficiency in their daily
              routine. Using advanced artificial intelligence algorithms, this
              app promises more than simply managing tasks.
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
          <div className="justify-start">Viewed this here ?</div>
          <div className="grid grid-cols-[auto_auto] items-center gap-2 justify-self-end">
            <p className="hover:text-brand-light">View All</p>
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
              Environmental monitoring app gains prominence, encouraging
              eco-friendly practices and promoting awareness.
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
              Virtual Reality
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Virtual reality glasses with haptic feedback provide a complete
              sensory experience, immersing users in digital environments.
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
              Cryptocurrencies
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              A new digital currency based on sustainable technologies emerges,
              aiming to minimize the environmental impact associated with
              cryptocurrency mining.
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
              E-commerce companies implement drone fleets for fast deliveries,
              transforming the online shopping landscape.
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
              3D Printing
            </span>
            <h2 className="text-text-primary text-sm font-bold leading-snug line-clamp-2">
              Innovative technology enables 3D printing of human organs,
              revolutionizing medicine and transplant waiting lists.
            </h2>
          </div>
        </div>
      </aside>
    </section>
  );
}
