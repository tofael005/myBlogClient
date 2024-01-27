import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="flex justify-between max-w-[1240px] mx-auto py-3">
            <h1>NavBar!</h1>

            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>Recent Blog</Link>
                </li>
                <li>
                    <Link to="/login">Login!</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;