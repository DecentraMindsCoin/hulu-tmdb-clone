import Thumbnail from './Thumbnail'

function Results({ resulta }) {
    return (
        <div>
            {requests.map(result => (
            <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    );
            }
    


export default Results
