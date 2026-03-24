import { Header } from "./header/header";
import { Highlights } from "./highlights/highlights";
function App() {
  return (
    <main className="min-h-screen flex flex-col bg-bg-main">
      <Header />
      <section className="px-4 py-6">
        <Highlights />
      </section>
    </main>
  );
}

export default App;
