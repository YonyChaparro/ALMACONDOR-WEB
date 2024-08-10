import { NavbarHome } from "./Navbar"
import Image from 'react-bootstrap/Image';



export const Home = () => {
    return (
        <>
        <NavbarHome />
        <Image src="/src/assets/fondo.png" fluid className="d-inline-block align-top"/>;
        </>
    )
}
