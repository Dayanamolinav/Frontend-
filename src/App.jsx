import Header from "./components/header";
import Hero from "./components/hero";
import CoursesSection from "./components/coursessection";
import Counter from "./components/counter";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <CoursesSection />
        <Counter />
      </main>

      <Footer />
    </>
  );
}

export default App;