import { Link } from "react-router-dom";
// import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to={"/vintages"}>Vintage App</Link>

            </h1>
            <button>
                <Link to={"/vintages/create"}>New item</Link>
            </button>
        </nav>
    )
}
