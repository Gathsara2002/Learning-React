import logo from './logo.svg';
import './App.css';
import Main from '../src/Component/Main';
import Task from './Component/Task';
//export default - import myData from './Data/myData';
import { myData } from './Data/myData';
import Content from './Component/Content';

function App() {

  const content = myData.map(({ name, city, salary }, index) => {
    return <Content key={index} name={name} city={city} salary={salary} />
  });

  return (

    //jsx fragment
    /* <>
      <Main>
        <h1> Hi this child component</h1>
      </Main>
      <Main name="This is a prop"/>
      <Main cusParam='This is custom parameter'/>
    </> */

    /* <>
     //Without object destruturing
       {myData?.map((ele, index) => {
         return <Task key={index} name={ele.name} city={ele.city} salary={ele.salary} />
       })}
 
       //With object destruturing
       {myData?.map(({ name, city, salary }, index) => {
         return <Task key={index} name={name} city={city} salary={salary} />
       })}
     </>*/

    <div className='mainBlock'>

      <div className='mainContainer'>
        {content}
      </div>

    </div>


  );
}

export default App;
