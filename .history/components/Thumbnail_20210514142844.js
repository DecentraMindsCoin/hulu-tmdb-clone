import Image from "next/image";

function Thumbnail({ result }) {
    console.log(result);

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div>
            <Image 
            layout="responsive"
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` || 
                `${BASE_URL}${result.poster_path}`
            }
             height={1080}
             width={1920} 
             />

            <div className="p-2">
            <p class="truncate ... max-w-sm">{result.overview}...</p>
                <h2>
                    {result.title || result.original_name}
                </h2>
                <p>
                    {result.media_type && `${result.}`}
                </p>
            </div>
        </div>
    );
}

export default Thumbnail;
