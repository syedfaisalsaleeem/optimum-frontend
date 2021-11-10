const TextBox = (props) => {
    const todolist = props.todo_list
    if (todolist) {
        return (
            <>
                <ul>
                    {todolist.map((value, index) => {
                        return (<li key={index}>
                            {value}
                        </li>);
                    })}
                </ul>
            </>
        )
    }
    else {
        return (
            <>
                <ul>
                </ul>
            </>
        )
    };

};

export default TextBox;