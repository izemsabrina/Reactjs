function Form (props){
    function handelchange(e){
        props.onWeightChange(e.target.value)
    }

    return (
        <div>
<label>Enter weight in {props.unit==="k" ? "kilos" : "pounts"}</label>
<input type="text" value={props.weight} onChange={handelchange} placeholder={`Enter a weight in ${props.unit==="k" ? "kilos" :"pounts"}`} />
</div>
    )
}
export default Form