import { NavbarHome } from "./Navbar"




export const Home = ({ props }) => {
    return (
        <>
            <NavbarHome />
            <div>Alma Condor</div>
            <div>{props}</div>
            <button type="button" class="btn btn-primary">Primary</button>
        </>
    )
}
