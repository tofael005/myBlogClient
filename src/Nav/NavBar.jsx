import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="flex justify-between max-w-[1240px] mx-auto py-3">
            <h1>NavBar!</h1>

            <ul>
                <li>
                    <Link to="/login"></Link>
                </li>
                
            </ul>
        </div>
    );
};

export default NavBar;