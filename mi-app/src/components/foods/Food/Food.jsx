
import { Link } from "react-router-dom"


function User({ data }) {
    return (
        <article>
            <Link to={`/food/${data.id}`}>
              
                <h2> {data.name}</h2>
               
            </Link>
        </article>
    )
}

export default Food