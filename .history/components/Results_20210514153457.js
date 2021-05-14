import Thumbnail from './Thumbnail';

function Results({ results }) {
    return (
        <div className="px-5 ">
            {results.map(result => (
            <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    );
            }
    


export default Results
