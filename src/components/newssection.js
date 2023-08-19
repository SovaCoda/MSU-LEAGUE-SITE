import NewsCard from "./newscard";

const NewsSection = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <text className= "text-5xl font-bold text-red-800 mt-12 mb-4">LATEST FROM US</text>
            <div className="flex justify-center gap-[12vw] p-12">
                <NewsCard bgImage='/images/clol.jpg' />
                <NewsCard bgImage='images/nace.jpg' />
                <NewsCard bgImage='/images/yubsnews.png '/>
            </div>
        </div>
    );
}

export default NewsSection;