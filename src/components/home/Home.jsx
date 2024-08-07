import { NavbarHome } from "./Navbar"




export const Home = ({ props }) => {
    return (
        <>
            <NavbarHome />
            <div>Home</div>
            <div>{props}</div>
            <button type="button" class="btn btn-primary">Primary</button>
        </>
    )
}
