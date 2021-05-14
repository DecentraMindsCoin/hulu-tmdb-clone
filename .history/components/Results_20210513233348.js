function Results({ requests }) {
    return (
        <div>
            {requests.map(result => <Thumbnail key={result.id/>)}
        </div>
    )
}

export default Results
