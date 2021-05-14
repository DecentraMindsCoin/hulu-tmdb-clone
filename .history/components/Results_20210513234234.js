import Thumbnail from './Thumbail'

function Results({ results }) {
    return (
        <div>
            {results.map((result) => (
            <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}

export default Results
