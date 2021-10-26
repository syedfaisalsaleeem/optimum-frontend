import InputBox from './components/InputBox/InputBox';
import React from 'react';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';

function App() {
  const [inputtext,changetextstate] = React.useState('');
  return (
    <>
      <p> {inputtext}</p>
      <InputBox text={changetextstate} />
      <ButtonComponent />
    </>
  );
}

export default App;
