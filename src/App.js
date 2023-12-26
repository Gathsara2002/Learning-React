import logo from './logo.svg';
import './App.css';
import Main from '../src/Component/Main';

function App() {
  return (
    //jsx fragment
    <>
      <Main>
        <h1> Hi this child component</h1>
      </Main>
      <Main name="This is a prop"/>
      <Main cusParam='This is custom parameter'/>
    </>
  );
}

export default App;
