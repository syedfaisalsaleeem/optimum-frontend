import InputBox from './components/InputBox/InputBox';
import React from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import TextBox from './components/TextBox/TextBox';

function App() {
  const [inputtext,changetextstate] = React.useState('');
  const [todolist,addtodolist] = React.useState([]);

  return (
    <>
      <InputBox text={changetextstate} />
      <ButtonComponent add_todo_list={addtodolist} value={inputtext} todo_list={todolist} />
      <TextBox todo_list={todolist} />
    </>
  );
}

export default App;
