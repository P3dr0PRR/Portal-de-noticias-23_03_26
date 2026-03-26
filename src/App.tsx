import { Header } from "./header/header";
import { Highlights } from "./highlights/highlights";
import { MostRead } from "./assets/mostRead/mostRead";
import { GeralContent } from "./geralcontent/geralcontent";
function App() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-main">
      <Header />
      <section className="px-4 py-6 space-y-[80px]">
        <Highlights />
        <MostRead />
        <GeralContent />
      </section>
    </main>
  );
}

export default App;
