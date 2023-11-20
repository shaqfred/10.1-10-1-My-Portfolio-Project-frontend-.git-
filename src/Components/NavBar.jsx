import { Link } from "react-router-dom";
 import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to={"/"}>Vintage App</Link>

            </h1>
            <button><Link to={"/vintages"}>All Vintage Clothes</Link></button>
            <button>
                <Link to={"/vintages/create"}>New item</Link>
            </button>
        </nav>
    )
}
