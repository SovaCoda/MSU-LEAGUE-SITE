const NewsCard = ({bgImage}) => {
    return(
        <div className="flex flex-shrink-0 justify-center w-60 sm:h-96 h-40 bg-contain bg-center rounded-lg" style={{ backgroundImage: `url(${bgImage})`}}></div>
    );
}
export default NewsCard;