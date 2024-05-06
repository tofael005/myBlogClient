import product from "../../../../assets/post/car beach.jpeg"

const ProductThat = () => {
    return (
        <div>
            <div className="mt-10 border rounded-md shadow-sm shadow-black/20 cursor-pointer">
            <h1 className="text-center p-4 font-bold hover:text-blue-500">Products That I, Have</h1>
        </div>

        <div className="mt-6">
            <div className="flex justify-center items-center gap-6">
                <img className="w-[100px] h-[100px]" src={product} alt="" />
                <div>
                    <h1>Apple MacBook Air  MJV2ELL/A 13-inch Laptop </h1>
                    <p>$514</p>
                </div>
            </div>
        </div>

        </div>
    );
};

export default ProductThat;