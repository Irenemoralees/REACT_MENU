import { Link } from "react-router-dom"

function Food ({ data }) {
    return (
        <article>
            <Link to={`/detail/${data.id}`}>
                <img src={data.imagen} alt="" />
                <h2> {data.name}</h2>
            </Link>
        </article>
    )
}

export default Food