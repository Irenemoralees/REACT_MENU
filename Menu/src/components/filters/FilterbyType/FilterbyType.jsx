

function FilterbyType({ changeType }) {

  const handleChange = (ev) => {
 
      changeType(ev.target.value)
  }
  return (
      <div>
          <input type="checkbox" name="" id="" value="Almuerzo" onChange={handleChange} /> Almuerzo
          <input type="checkbox" name="" id="" value="Cena" onChange={handleChange} /> Cena


          
          
      </div>
  )
}

export default FilterbyType;