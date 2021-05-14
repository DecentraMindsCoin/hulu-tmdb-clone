function Thumbnail({ result }) {
    return (
        <div>
            <Image 
            layout='responsive' src={
                    `$BASE`
            } height={1000} wisth={1920} />
        </div>
    )
}

export default Thumbnail;
