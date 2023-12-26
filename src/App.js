import logo from './logo.svg';
import './App.css';
import Main from '../src/Component/Main';
import Task from './Component/Task';
import myData from './Data/myData';

function App() {
  return (

    //jsx fragment
    /* <>
      <Main>
        <h1> Hi this child component</h1>
      </Main>
      <Main name="This is a prop"/>
      <Main cusParam='This is custom parameter'/>
    </> */

    <>
    //Without object destruturing
      {myData.map((ele, index) => {
        return <Task key={index} name={ele.name} city={ele.city} salary={ele.salary} />
      })}

      //With object destruturing
      {myData.map(({ name, city, salary }, index) => {
        return <Task key={index} name={name} city={city} salary={salary} />
      })}
    </>

  );
}

export default App;
