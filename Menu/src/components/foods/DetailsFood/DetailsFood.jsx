import { Link, useParams } from "react-router-dom"


function DetailsFood({ data }) {
    const { idFood } = useParams()
    const findFood = data.find((food) => food.id === idFood)
    return (
        <>
            <article>
                <img src={findFood.image} alt="" />
                <h1>{findFood.name} </h1>
                <h2>{findFood.type}</h2>
                <p>{findFood.description}</p>
            </article>
            <Link to="/" className="home"> IR A HOME </Link>
        </>
    )
}

export default DetailsFood