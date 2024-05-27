

function FilterbyType({ changeType }) {

  const handleChange = (ev) => {
 
      changeType(ev.target.value)
  }
  return (
      <div>
          <input type="checkbox" name="" id="" value="almuerzo" onChange={handleChange} /> Almuerzo
          <input type="checkbox" name="" id="" value="cena" onChange={handleChange} /> Cena
      </div>
  )
}

export default FilterbyType