import { FaComments, FaLocationArrow } from "react-icons/fa6";
import postOne from "../../../assets/post/Beach.jpeg"
import postTwo from "../../../assets/post/car beach.jpeg"


const PostBanTwo = () => {
    return (
        <div className="mt-14">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="shadow-black/20 shadow-sm rounded-md">
                    <img className="md:w-[430px] rounded-t-md" src={postOne} alt="" />
                    <div className="p-3">
                        <p>September 17, 2021 - Tips & Tricks</p>
                        <h1 className="text-3xl font-semibold my-6">Have you read The Beach by Alex?</h1>
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
                <div className="shadow-black/20 shadow-sm rounded-md">
                    <img className="w-full md:w-[430px] rounded-t-md" src={postTwo} alt="" />
                    <div className="p-3">
                        <p>September 17, 2021 - Tips & Tricks</p>
                        <h1 className="text-3xl font-semibold my-6">The writer actually live in Philippines</h1>
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

export default PostBanTwo;