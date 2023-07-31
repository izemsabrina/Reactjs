function Footer (props){
  
    return (
        <footer><p>The weight is 
            {props.weight>1000 
            ? <span className="red">Higher</span>
            :<span className="green">Lower</span>}
             than one tonne!!</p></footer>
    )
}
export default Footer;