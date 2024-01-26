import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div className="max-w-[1240px] mx-auto bg-slate-300 h-[90vh]">
            <h1>Login Page</h1>
            <form className="w-[600px] mx-auto md:mt-28">
                <label htmlFor="" className="text-lg">Name:</label><br />
                <input className="w-full border p-3 rounded-md mt-1 mb-4" type="text" name="name" id="" placeholder="Enter name" /><br />
                <label htmlFor="" className="text-lg">Email:</label><br />
                <input className="w-full border p-3 rounded-md mt-1 mb-4" type="email" name="email" id="" placeholder="Enter email" /><br />
                <label htmlFor="" className="text-lg">Password:</label><br />
                <input className="w-full border p-3 rounded-md mt-1" type="password" name="password" id="" placeholder="Enter password" />

                <input className="bg-blue-400 w-full block mx-auto p-3 rounded-md mt-5" type="button" value="Sign Up" />
                <p className="text-center mt-3">Already have an account<span className="text-blue-800"><Link to="/login">Login</Link></span></p>
            </form>
        </div>
    );
};

export default SignUp;