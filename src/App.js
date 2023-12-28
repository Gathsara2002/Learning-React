// import logo from './logo.svg';
// import './App.css';
// import Main from '../src/Component/Main';
// import Task from './Component/Task';
// //export default - import myData from './Data/myData';
// import { myData } from './Data/myData';
// import Content from './Component/Content';
// import { useState } from 'react';

import { useState } from "react";

// //let myVar = "Gathsara";

// function App() {

//   // const clickOnHandle2 = (a) => {
//   //   alert(a);
//   // };

//   //useState hook
//   //const[myVar,setMyVar]=useState('Gathsara');

//   //useState hook with object
//   const [myVar, setMyVar] = useState({
//     name: 'Gathsara',
//     city: 'Galle',
//     salary: 1000000
//   })

//   const [myDataState, seMyDataState] = useState(myData);

//   const [inptVal, setInputVal] = useState("Gathsara");

//   const [count, setCount] = useState(0);



//   const clickOnHandle = () => {
//     // setMyVar({
//     //   ...myVar,
//     //   name: 'Liviru',
//     //   salary: 5000000000
//     // });

//     // seMyDataState([...myData,
//     // {
//     //   name: 'Gathsara',
//     //   city: 'Galle',
//     //   salary: 1000000,
//     //   image: "https://www.ocregister.com/wp-content/uploads/2023/02/hypatia-h_fac40a3d60dff2415c09917e29e49b53-h_80f233feb84cf2f30a294f91eb18e0b7.jpg?w=1024"
//     // }
//     // ]);

//     // console.log(myVar);
//     // console.log(myDataState);
//     // console.log(inptVal);

//     setTimeout(() => {
//       console.log("Im clicked");
//       //setCount(count + 1);

//       //get ptrvious value from setCount()
//       setCount((prev)=>prev+1);
//     }, 3000);

//   }

//   const content = myDataState.map(({ name, city, salary, image }, index) => {
//     return <Content key={index} name={name} city={city} salary={salary} image={image} />
//   });


//   return (

//     //jsx fragment
//     /* <>
//       <Main>
//         <h1> Hi this child component</h1>
//       </Main>
//       <Main name="This is a prop"/>
//       <Main cusParam='This is custom parameter'/>
//     </> */

//     /* <>
//      //Without object destruturing
//        {myData?.map((ele, index) => {
//          return <Task key={index} name={ele.name} city={ele.city} salary={ele.salary} />
//        })}

//        //With object destruturing
//        {myData?.map(({ name, city, salary }, index) => {
//          return <Task key={index} name={name} city={city} salary={salary} />
//        })}
//      </>*/

//     <div className='mainBlock'>

//       <h1>{count}</h1>

//       <div className='mainContainer'>
//         {content}
//       </div>
//       <br /><br />

//       <button style={
//         {
//           fontSize: "12px",
//           border: "1px solid red",
//           padding: "7px 12px"
//         }
//       } onClick={clickOnHandle}> Click 1

//       </button>

//       {/* <button style={
//         {
//           fontSize: "12px",
//           border: "1px solid red",
//           padding: "7px 12px"
//         }
//       } onClick={()=>clickOnHandle2("Passing arguments")}> Click 2

//       </button>  */}

//       <br />
//       <br />

//       <input style={{
//         border: "1px solid red",
//         fontSize: "8px",
//         padding: "10px"
//       }}
//         type='text' placeholder='Type Anything'

//         onChange={(e) => {
//           e.preventDefault();
//           setInputVal(e.target.value);
//         }}
//       />

//     </div>

//   );

// }

// export default App;

const App = () => {

  const [imgUrl, setImgUrl] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [position, setPosition] = useState('');

  return (
    <div className="main_container">

      <div className="main_left">

        <input type="text" value={imgUrl} placeholder="Input Image URL" onChange={(e) => {
          e.preventDefault();
          setImgUrl(e.target.value);
        }} />

        <input type="text" value={name} placeholder="Input Name" onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }} />

        <input type="text" value={city} placeholder="Input City" onChange={(e) => {
          e.preventDefault();
          setCity(e.target.value);
        }} />

        <input type="text" value={position} placeholder="Input Position" onChange={(e) => {
          e.preventDefault();
          setPosition(e.target.value);
        }} />

        <button onClick={() => {
          console.log({
            imgUrl: imgUrl,
            name: name,
            city: city,
            position: position
          });

          // clear nput field
          setImgUrl((pre) => { if (pre.length > 0) { return '' } else { return pre } });
          setName((pre) => { if (pre.length > 0) { return '' } else { return pre } });
          setCity((pre) => { if (pre.length > 0) { return '' } else { return pre } });
          setPosition((pre) => { if (pre.length > 0) { return '' } else { return pre } });

        }}>
          Submit</button>

      </div>

      <div className="main_right"></div>

    </div>
  );
}

export default App;
