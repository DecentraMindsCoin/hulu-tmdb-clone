import Thumbnail from './Thumbnail'

function Results({ results }) {
    return (
        <div>
            {requests.map(result => (
            <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    );
            }
    


export default Results
