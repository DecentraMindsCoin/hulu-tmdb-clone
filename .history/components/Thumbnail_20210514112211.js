import Image from "next/image";

function Thumbnail({ result }) {
    const BASE_URL = 'https://image.tmbdb.org/t/p/original'
    return (
        <div>
            <Image 
            layout='responsive' 
            src={}
             height={1000}
             width={1920} 
             />
        </div>
    )
}

export default Thumbnail;
