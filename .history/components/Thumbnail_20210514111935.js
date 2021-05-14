import Image from "next/image";

function Thumbnail({ result }) {
    return (
        <div>
            <Image 
            layout='responsive' 
            src={

                    `${BASE_URL}${result.backdrop_path || result.poster_path}` || 
                    `${BASE_URL}${result.poster_path}`
             height={1000} wisth={1920} />
        </div>
    )
}

export default Thumbnail;
