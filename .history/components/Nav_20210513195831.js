import requests from "../utils/requests"

function Nav() {
    return (
        <nav>
            <div className=''>
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 key={key} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-red-500'>{title}</h2>
                ))}
            </div>
        </nav>
    )
}

export default Nav
