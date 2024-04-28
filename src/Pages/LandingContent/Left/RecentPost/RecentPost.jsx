import post from "../../../../assets/post/Beach.jpeg"

const RecentPost = () => {
    return (
        <div>
            <div className="border rounded-md shadow-black/30 shadow-sm mt-10">
                <h1 className="text-2xl font-bold text-center p-4">Recent Posts.</h1>
            </div>

            
            <div className="mt-10 shadow-sm shadow-black/20 rounded-md cursor-pointer">
                <div className="flex gap-3 items-center">
                    <img className="md:w-[100px] h-[80px] rounded-md" src={post} alt=""/>
                    <div>
                        <p className="text-sm">September 17, 2021 - Tips & Tricks</p>
                        <h1 className="text-xl mt-2 font-bold">Have you read The Beach by Alex.</h1>
                    </div>
                </div>
            </div>
            <div className="mt-6 shadow-sm shadow-black/20 rounded-md cursor-pointer">
                <div className="flex gap-3 items-center">
                    <img className="md:w-[100px] h-[80px] rounded-md" src={post} alt="" />
                    <div>
                        <p className="text-sm">September 17, 2021 - Tips & Tricks</p>
                        <h1 className="text-xl mt-2 font-bold">Have you read, The Beach by Alex.</h1>
                    </div>
                </div>
            </div>
            <div className="mt-6 shadow-sm shadow-black/20 rounded-md cursor-pointer">
                <div className="flex gap-3 items-center">
                    <img className="md:w-[100px] h-[80px] rounded-md" src={post} alt="" />
                    <div>
                        <p className="text-sm">September 17, 2021 - Tips & Tricks.</p>
                        <h1 className="text-xl mt-2 font-bold">Have you read The Beach by, Alex</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;