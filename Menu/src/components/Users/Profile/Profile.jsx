import ListFoods from "../../foods/ListFoods/ListFoods"

function profile(data) {
return (
<div>
  <ListFoods foods={data}/>
</div>
)
  
}

export default profile