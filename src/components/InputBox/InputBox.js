const InputBox =(props) =>{
    console.log(props)
    return(
        <>
         <input data-testid="text-input" type="text" onChange={e=> props.text(e.target.value)}/>
        </>
    )
};

export default InputBox;