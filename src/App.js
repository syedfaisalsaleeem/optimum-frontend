import InputBox from './components/InputBox/InputBox';
import React, { useEffect } from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import TextBox from './components/TextBox/TextBox';

function App() {
  const [inputtext,changetextstate] = React.useState('');
  const [todolist,addtodolist] = React.useState([]);

  useEffect( ()=>{
    fetch("http://127.0.0.1:8010/todolist")
    .then(response => response.json())
    .then(data => {
      var newList = []
      for(var i=0;i<data.length;i++){
        newList.push(data[i].todolist)
      }
    addtodolist(newList);
  });

 },[]);
  return (
    <>
      <InputBox text={changetextstate} />
      <ButtonComponent add_todo_list={addtodolist} value={inputtext} todo_list={todolist} />
      <TextBox todo_list={todolist} />
    </>
  );
}

export default App;
