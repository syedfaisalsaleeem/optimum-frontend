const ButtonComponent =(props) =>{
    console.log(props.value)
    function add_item(){
        console.log("-----",props.value,props.add_todo_list);
        // console.log(props.add_todo_list)
        const newList = props.todo_list.concat(props.value);
 
        props.add_todo_list(newList);
     
    }
    return(
        <>
            <button onClick={add_item}> Add item </button>
        </>
    )
};

export default ButtonComponent;