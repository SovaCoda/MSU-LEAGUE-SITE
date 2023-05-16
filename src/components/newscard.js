const NewsCard = ({bgImage}) => {
    return(
        <div class="flex flex-shrink-0 justify-center w-60 h-96 bg-contain bg-center rounded-lg" style={{ backgroundImage: `url(${bgImage})`}}></div>
    );
}
export default NewsCard;