import about from "../../assets/banner/me.jpg"

const LandingSection = () => {
    return (
        <div className="mt-12 container mx-auto">
            <div className="flex md:flex-row flex-col gap-6">
                <div className="md:w-[400px]">
                    <img src={about} alt="" />
                </div>

                <div className="md:w-[800px]">
                    <h1>Right</h1>
                </div>
            </div>
        </div>
    );
};

export default LandingSection;