function Results({ requests }) {
    return (
        <div>
            {requests.map(result => <Thumbnail key={result.id} result={/>)}
        </div>
    )
}

export default Results
