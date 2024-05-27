import Food from "../Food/Food"



function ListFoods({ foods }) {

    const foodsHtml = foods.map((item) => <li key={item.id}> <Food data={item} /> </li>)

    return (
        <ul>
            {foodsHtml}
        </ul>
    )
}

export default ListFoods