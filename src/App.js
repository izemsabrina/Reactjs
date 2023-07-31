import React from "react"
import Header from "./composants/Header";
import Footer from "./composants/Footer";
import Form from "./composants/Form";
import Button from "./composants/Button";


class App extends React.Component{
       constructor (props){
           super(props)
           this.state={weight:"", unit:"k"}
           this.handelKilosChange=this.handelKilosChange.bind(this)
           this.handelPoundsChange=this.handelPoundsChange.bind(this);
           this.handelRest=this.handelRest.bind(this)
}
handelKilosChange(InputValue){
this.setState({unit:"l", weight:InputValue})

}
handelPoundsChange(InputValue){
  this.setState({unit:"k", weight:InputValue})

}
handelRest(InputValue){
  this.setState({unit:"k", weight:""})


}
toLbs(kilos){
  return kilos*2.2;
}
toKilos(pounds){
  return pounds*0.45
}
convert(weight,convertMethode){
  console.log("toto")
  const inputValue=parseFloat(weight)
 if (Number.isNaN(inputValue)){
  return ""

 }
 const result =convertMethode(inputValue)
 const roundedResult=Math.round(result,2)
 return roundedResult.toString();

}

  render(){ 
    const weight = this.state.weight;
    const unit  = this.state.unit;
    const kilos =unit ==="k" ? this.convert(weight,this.toKilos): weight;
    const pounts =unit === "l"? this.convert (weight,this.toLbs) : weight;
    
    return(
    <div className="converter">
    <Header/>
    <Form  weight={kilos} unit="k" onWeightChange={this.handelKilosChange}/>
    <Form  weight={pounts} unit="l" onWeightChange={this.handelPoundsChange}/>
    <Button onClick={this.handelRest}/>
    <Footer weight={parseFloat(kilos)}/>
    </div>
    )
  }
}
export default App;