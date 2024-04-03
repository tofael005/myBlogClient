import post from "../../../../assets/post/Beach.jpeg"

const RecentPost = () => {
    return (
        <div>
            <div className="border rounded-md shadow-black/30 shadow-sm mt-10">
                <h1 className="text-2xl font-bold text-center p-4">Recent Post</h1>
            </div>
            <div>
                <div>
                    <img src={post} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RecentPost;