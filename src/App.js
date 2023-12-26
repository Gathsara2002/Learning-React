import logo from './logo.svg';
import './App.css';
import Main from '../src/Component/Main';
import Task from './Component/Task';

const myData = [
  {
    name: 'Gathsara',
    city: 'Galle',
    salary: 1000000
  },

  {
    name: 'Liviru',
    city: 'Ambalangoda',
    salary: 12000000
  }
];

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
      {myData.map((ele) => {
        return <Task name={ele.name} city={ele.city} salary={ele.salary} />
      })}

      //With object destruturing
      {myData.map(({ name, city, salary }) => {
        return <Task name={name} city={city} salary={salary} />
      })}
    </>

  );
}

export default App;
