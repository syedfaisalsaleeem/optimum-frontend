const TextBox =() =>{
    const todolist = []
    return(
        <>
        <ul>
            {todolist.map((item)=>{
                <li>
                    {item}
                </li>
            })}
        </ul>
        </>
    )
};

export default TextBox;