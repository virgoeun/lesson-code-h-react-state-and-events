
function ChangeCountries ({addCountries}) { //const {addCountries} = props.addCountries

  return (
    <div> 
    <button onClick={addCountries}>update Country</button>  
    {/* OR  <button onClick={props.addCountries}>update Country</button>       */}
    </div>
  )

};

export default ChangeCountries;
