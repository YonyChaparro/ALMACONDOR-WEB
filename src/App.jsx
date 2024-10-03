import { Home } from "./components/home/Home"
import { SectionConciertos } from "./components/presentaciones/SectionConciertos"
import SocialButtons from "./components/floatingButtons/SocialButtons"
import { Section } from "./components/sections/Section"
import { Gallery } from "./components/gallery/Gallery"

function App() {

  return (
    <>
      <Section id="home" component={<Home />} />
      <Section id="presentation" component={<SectionConciertos />} />
      <Section id="gallery" component={<Gallery />} />
      <SocialButtons />
    </>
  )
}

export default App


