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
            <div>
                <p className-"">{result.overview}</p>
            </div>
        </div>
    );
}

export default Thumbnail;
