import InputBox from './components/InputBox/InputBox';
import React from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import TextBox from './components/TextBox/TextBox';

function App() {
  const [inputtext,changetextstate] = React.useState('');
  return (
    <>
      <p> {inputtext}</p>
      <InputBox text={changetextstate} />
      <ButtonComponent />
      <TextBox/>
    </>
  );
}

export default App;
