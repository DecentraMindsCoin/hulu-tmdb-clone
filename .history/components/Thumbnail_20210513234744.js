function Thumbnail({ result }) {
    return (
        <div>
            <Image 
            layout='responsive' src={
                    `$BASE_URL`
            } height={1000} wisth={1920} />
        </div>
    )
}

export default Thumbnail;
