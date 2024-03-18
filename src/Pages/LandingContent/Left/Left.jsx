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



            <div className="mt-10 shadow-black/35 shadow-sm rounded-md p-4">
                <h1 className="text-center mb-8 text-xl font-semibold">Categories</h1>
                <div>
                    <div className="flex justify-between items-center my-4">
                        <h1>Europe</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <h1>Mountains</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <h1>Travelin Videos</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <h1>Guides for traveler</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <h1>Beauty of Seas</h1>
                        <p>(22)</p>
                    </div>
                    <div className="flex justify-between items-center my-4">
                        <h1>Others</h1>
                        <p>(22)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;