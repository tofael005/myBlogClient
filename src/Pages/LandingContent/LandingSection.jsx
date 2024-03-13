import about from "../../assets/banner/me.jpg"
import { FaLocationArrow } from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";

const LandingSection = () => {
    return (
        <div className="mt-12 container mx-auto">
            <div className="flex md:flex-row flex-col gap-6">
                <div className="md:w-[500px] px-2">
                    <div className="p-4 shadow-black/25 shadow-sm rounded-md">
                        <h1>About Me</h1>
                        <img className="rounded-md" src={about} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit beatae pariatur. quibusdam quia! Omnis reprehenderit deleniti nulla nihil eveniet?</p>
                        <button>Read more</button>
                    </div>
                </div>

                <div className="md:w-full px-2">
                    <div>
                        <img className="rounded-md h-[50vh] w-full" src={about} alt="" />
                        <h1 className="my-6">July, 15, 2021 - Tips and Tricks </h1>
                        <p>A traveler’s guide to Penang, Malaysia - Where to
                            Eat, Drink, Sleep and Explore </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p>


                        <div className="">
                            <div>
                                <FaLocationArrow />
                                <p>Malaysia</p>
                            </div>
                            <div>
                                <FaComments />
                                <p>Comment (52)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;