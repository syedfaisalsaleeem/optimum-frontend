
const ButtonComponent = (props) => {
  function add_item() {
    if (props.value.length <= 1) {
      props.changemessage('cannot add empty item')
    }

    else if (props.value.length > 1) {
      var raw = JSON.stringify({ "Todolist": props.value });

      var requestOptions = {
        method: 'POST',
        body: raw,
      };

      fetch("http://localhost:8080/todolist", requestOptions)
        .then(response => response.json())
        .then(result => {
          console.log(result);
          const newList = props.todo_list.concat(props.value);
          props.add_todo_list(newList);
          props.changemessage('successfully added');
        })
        .catch(error => {
          console.log('error', error);
          props.changemessage('cannot add empty item')
        });
    }


  }
  return (
    <>
      <button onClick={add_item}> Add item </button>
    </>
  )
};

export default ButtonComponent;