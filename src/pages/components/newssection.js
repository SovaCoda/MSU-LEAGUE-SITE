import NewsCard from "./newscard";

const NewsSection = () => {

    return (
        <div class="flex flex-row justify-center mx-auto gap-12 p-12">
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    )
}

export default NewsSection;