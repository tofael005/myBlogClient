import { FaComments, FaLocationArrow } from "react-icons/fa6";
import post from "../../../assets/post/car beach.jpeg"

const PostBanThree = () => {
    return (
        <div className="mt-10">
            <div className="shadow-black/25 shadow-sm rounded-md">
                <img className="md:w-full rounded-t-md md:h-[400px]" src={post} alt="" />
                <div>
                    <div className="p-3">
                        <p>September 17, 2021 - Tips & Tricks</p>
                        <h1 className="text-3xl font-semibold my-6">Finding Love & home in Tbilisi, Georgia</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget gravida viverra. Pharetra pharetra.</p>

                        <div className="flex justify-between items-center mt-14 mb-3">
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
        </div>
    );
};

export default PostBanThree;