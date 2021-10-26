import InputBox from './components/InputBox/InputBox';
import React from 'react';
function App() {
  const [inputtext,changetextstate] = React.useState('');
  return (
    <>
      <InputBox text={changetextstate} />
    </>
  );
}

export default App;
