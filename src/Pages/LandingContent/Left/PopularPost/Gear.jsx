import { Link } from "react-router-dom";


const Gear = () => {
    return (
        <div className="border mt-10 rounded-md shadow-sm shadow-black/20 text-center p-8">
            <h1 className="text-3xl font-semibold">Gear I Use?</h1>
            <p className="text-3xl font-semibold my-6">What’s in My Bag??</p>
            <p>Unfortunately, there is no “one-size-fits-all” when it comes to travel packing lists.</p>
            <Link to="/gear"><button className="my-6 bg-blue-500 text-white p-3 rounded-md">View details</button></Link>
        </div>
    );
};

export default Gear;