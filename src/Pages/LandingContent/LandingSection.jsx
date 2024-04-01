
import Left from "./Left/Left";
import RecentPost from "./Left/RecentPost/RecentPost";
import PostBanThree from "./Right/PostBanThree";
import PostBanTwo from "./Right/PostBanTwo";
import Right from "./Right/Right";

const LandingSection = () => {
    return (
        <div className="mt-12 container mx-auto mb-12">
            <div className="flex md:flex-row flex-col gap-8">

                {/* LEFT SITE  */}
                <div className="md:w-[500px] px-2">
                    <Left />
                    <RecentPost />
                </div>



                {/* RIGHT SITE  */}
                <div className="md:w-full px-2">
                    <Right />
                    <PostBanTwo />
                    <PostBanThree />
                </div>
            </div>
        </div>
    );
};

export default LandingSection;