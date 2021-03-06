import { ThumbUpIcon } from "@heroicons/react/outline";import Image from "next/image";



function Thumbnail({ result }) {
    console.log(result);

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="group cursor-pointer">
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
            <p className="truncate max-w-md">{result.overview}</p>
                <h2>{result.title || result.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.media_type && `${result.media_type} •`}{" "} 
                    {result.release_date || result.first_air_date} •{" "}
                    <ThumbUpIcon className="max-h-5" /> {result.vote_count}
                </p>
            </div>
        </div>
    );
}

export default Thumbnail;
