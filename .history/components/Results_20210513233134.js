function Results({ requests }) {
    return (
        <div>
            {requests.map(result => <Thumbnail />)}
        </div>
    )
}

export default Results
