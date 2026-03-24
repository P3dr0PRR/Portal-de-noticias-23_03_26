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
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="gap-[16px] grid grid-cols-1 sm:grid-cols-2">
        <div className="relative">
          <img src={img2} alt="Highlight 2" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative">
          <img src={img3} alt="Highlight 3" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative">
          <img src={img4} alt="Highlight 4" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="relative">
          <img src={img5} alt="Highlight 5" className="responsive-image" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
