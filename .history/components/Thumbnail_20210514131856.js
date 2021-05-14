import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function Thumbnail({ result }) {
    console.log(result);

    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div className='group'>
            <Image 
            layout='responsive' 
            src={
                `${BASE_URL}${result.backdrop_path || result.poster_path}` || 
                `${BASE_URL}${result.poster_path}`
            }
             height={1080}
             width={1920} 
             />
             <div className='p-2'>
                 <p className="truncate max-w-md">{result.overview}</p>
                 <h2>
                     {result.title || result.original_name}</h2>
                     <p className="flex items-center opacity-0 group-hover:opacity-100">
                         {result.media_type && `${result.media_type} `}{" "} 
                         {result.release_date || result.first_air_date} •{" "}
                     </p>
               
             </div>
        </div>
    );
}

export default Thumbnail;
