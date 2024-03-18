import leftimg from "../../../assets/banner/me.jpg"

const Left = () => {
    return (
        <div>
            <div className="p-4 shadow-black/25 shadow-sm rounded-md">
                <img className="rounded-md" src={leftimg} alt="" />
                <h1>About Me</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit beatae pariatur. quibusdam quia! Omnis reprehenderit deleniti nulla nihil eveniet?</p>
                <button className="p-3 bg-blue-600 rounded-md block mx-auto my-4 text-white">Read more</button>
            </div>



            <div className="mt-10">
                <h1>Catagory</h1>
                <div>
                    <div className="flex justify-between items-center">
                        <h1>Europe</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Europe</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Europe</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1>Europe</h1>
                        <p>(22)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;