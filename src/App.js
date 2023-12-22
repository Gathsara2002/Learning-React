import logo from './logo.svg';
import './App.css';
import Main from '../src/Component/Main';

function App() {
  return (
    //jsx fragment
    <>
      <Main></Main>
      <Main name="prop"/>
    </>
  );
}

export default App;
