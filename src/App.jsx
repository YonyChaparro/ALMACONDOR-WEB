import { Home } from "./components/home/Home"
import { SectionConciertos } from "./components/conciertos/sectionConciertos"
import SocialButtons from "./components/floatingButtons/SocialButtons"

function App() {

  return (
    <>
      <section id="home" className="section-fullscreen">
        <Home />
      </section>
      <section id="presentation" className="section-fullscreen">
        <SectionConciertos />
      </section>
      <SocialButtons />
    </>
  )
}

export default App


