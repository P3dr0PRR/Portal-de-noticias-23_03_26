import { Header } from "./components/header/header";
import { Highlights } from "./components/highlights/highlights";
import { MostRead } from "./assets/mostRead/mostRead";
import { GeralContent } from "./components/geralcontent/geralcontent";
import { Footer } from "./components/footer/footer";
function App() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-main">
      <Header />
      <section className="px-4 py-6 space-y-[80px]">
        <Highlights />
        <MostRead />
        <GeralContent />
      </section>
      <Footer />
    </main>
  );
}

export default App;
