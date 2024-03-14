

const Right = () => {
    return (
        <div>
            <div className="shadow-black/20 shadow-md rounded-md">
                <img className="rounded-t-md h-[50vh] w-full" src={about} alt="" />
                <div className="p-3">
                    <h1 className="my-6">July, 15, 2021 - Tips and Tricks </h1>
                    <p className="text-3xl mb-4">A traveler’s guide to Penang, Malaysia - Where to
                        Eat, Drink, Sleep and Explore </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p>


                    <div className="flex justify-between items-center my-6">
                        <div className="flex justify-between items-center gap-2">
                            <FaLocationArrow />
                            <p>Panang, Malaysia</p>
                        </div>
                        <div className="flex justify-between items-center gap-2">
                            <FaComments />
                            <p>Comment (52)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;