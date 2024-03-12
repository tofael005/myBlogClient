import about from "../../assets/banner/me.jpg"

const LandingSection = () => {
    return (
        <div className="mt-12 container mx-auto">
            <div className="flex md:flex-row flex-col gap-6">
                <div className="md:w-[500px] px-2">
                    <div className="shadow-black shadow-sm p-4 rounded-md">
                        <h1>About Me</h1>
                        <img className="rounded-md" src={about} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reprehenderit beatae pariatur. quibusdam quia! Omnis reprehenderit deleniti nulla nihil eveniet?</p>
                        <button>Read more</button>
                    </div>
                </div>

                <div className="md:w-full px-2">
                    <img className="rounded-md" src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LandingSection;