import logo from './logo.svg';
import './App.css';
import Main from '../src/Component/Main';
import Task from './Component/Task';
//export default - import myData from './Data/myData';
import { myData } from './Data/myData';
import Content from './Component/Content';
import { useState } from 'react';

//let myVar = "Gathsara";

function App() {

  const content = myData.map(({ name, city, salary, image }, index) => {
    return <Content key={index} name={name} city={city} salary={salary} image={image} />
  });

  // const clickOnHandle2 = (a) => {
  //   alert(a);
  // };

  //useState hook
  //const[myVar,setMyVar]=useState('Gathsara');

  //useState hook with object
  const [myVar, setMyVar] = useState({
    name: 'Gathsara',
    city: 'Galle',
    salary: 1000000
  })

  const clickOnHandle = () => {
    setMyVar({
      ...myVar,
      name: 'Liviru',
      salary: 5000000000
    });
    console.log(myVar);
  }


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

      <h1>{myVar.name}</h1>

      <div className='mainContainer'>
        {content}
      </div>
      <br /><br />

      <button style={
        {
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px"
        }
      } onClick={clickOnHandle}> Click 1

      </button>

      {/* <button style={
        {
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px"
        }
      } onClick={()=>clickOnHandle2("Passing arguments")}> Click 2

      </button>  */}

    </div>

  );

}

export default App;
