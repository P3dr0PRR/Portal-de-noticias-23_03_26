import arrow from "../icons/ArrowRight.svg";
import img6 from "../imgs/Image 06.png";
import img7 from "../imgs/Image 07.png";
import img8 from "../imgs/Image 08.png";
import img9 from "../imgs/Image 09.png";

export function MostRead() {
  return (
    <section>
      <header className="text-text-secondary grid grid-cols-[1fr_1fr] border-t border-gray-700 py-4">
        <div className="justify-start">Most read this week</div>
        <div className="grid grid-cols-[auto_auto] items-center gap-2 justify-self-end">
          <p className=" hover:text-brand-light">View All</p>
          <img src={arrow} alt="Arrow" className="h-4 w-auto " />
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px] mt-4">
        <div className="grid grid-cols-1 relative">
          <img src={img6} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Flying Vehicles
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            Prototype of a flying vehicle is presented, marking the beginning of
            the era of personal aerial transportation.
          </h2>
        </div>

        <div className="grid grid-cols-1 relative">
          <img src={img7} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Holograms
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            Video conferencing platform introduces new hologram feature, making
            virtual calls more realistic and engaging.
          </h2>
        </div>

        <div className="grid grid-cols-1 relative">
          <img src={img8} alt="Most Readeds 1" className="responsive-image" />
          <div className="absolute inset-x-0 top-0 p-4 px-6">
            <figcaption>
              <span className="text-text-primary xl:text-xl title-bg">
                Gaming
              </span>
            </figcaption>
          </div>
          <h2 className="text-text-primary mt-3 line-clamp-2 break-words">
            A new generation of gaming consoles is launched, bringing
            ultra-realistic graphics and completely immersive gaming
            experiences.
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
            Project aims to provide high-speed internet in remote areas through
            satellites.
          </h2>
        </div>
      </div>
    </section>
  );
}
