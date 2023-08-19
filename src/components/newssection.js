import NewsCard from "./newscard";

const NewsSection = () => {

    return (
        <div className="flex flex-col justify-center items-center">
            <text className= "sm:text-5xl text-4xl font-bold text-red-800 sm:mt-12 mt-16 sm:mb-4 mb-8">LATEST FROM US</text>
            <div className="flex flex-col sm:flex-row justify-center sm:gap-[12vw] gap-8 sm:p-12 p-8">
                <NewsCard bgImage='/images/clol.jpg' />
                <NewsCard bgImage='images/nace.jpg' />
                <NewsCard bgImage='/images/yubsnews.png '/>
            </div>
        </div>
    );
}

export default NewsSection;