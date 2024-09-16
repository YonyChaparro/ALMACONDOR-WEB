import { Home } from "./components/home/Home"
import { SectionConciertos } from "./components/conciertos/sectionConciertos"

function App() {

  return (
    <>
      <section id="home" className="section-fullscreen">
        <Home />
      </section>
      <section id="presentation" className="section-fullscreen">
        <SectionConciertos />
      </section>
    </>
  )
}

export default App


