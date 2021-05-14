function Results({ requests }) {
    return (
        <div>
            {requests.map(result => <Thumbnail key={result/>)}
        </div>
    )
}

export default Results
