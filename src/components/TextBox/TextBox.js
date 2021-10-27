const TextBox =() =>{
    const todolist = []
    return(
        <>
        <ul>
            {todolist.map((item)=>{
                return (<li>
                    {item}
                </li>);
            })}
        </ul>
        </>
    )
};

export default TextBox;