// import logo from './logo.svg';
import './App.css';
// import Main from '../src/Component/Main';
// import Task from './Component/Task';
// //export default - import myData from './Data/myData';
// import { myData } from './Data/myData';
// import Content from './Component/Content';
// import { useState } from 'react';

import { Fragment, useEffect, useState } from "react";
import Unit from './Component/Unit';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import ContactDetails from './Component/ContactDetails';
import User from './Component/User';

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

// const App = () => {

//   //to check state of input datas
//   // const [imgUrl, setImgUrl] = useState('');
//   // const [name, setName] = useState('');
//   // const [city, setCity] = useState('');
//   // const [position, setPosition] = useState('');

//   const [inpuData, setInputData] = useState({
//     imgUrl: '',
//     name: '',
//     city: '',
//     position: ''
//   });

//   //to store data
//   const [data, SetData] = useState([]);

//   //use effect deafult
//   // useEffect(()=>{
//   //   console.log("Use effect calling");
//   // });

//   //use effect one time
//   // useEffect(()=>{
//   //   console.log("Use effect calling");
//   // },[]);

//   //use effect dependency
//   useEffect(() => {
//     console.log("Use effect calling");
//   }, [inpuData]);


//   return (

//     <div>

//       <Header></Header>

//       <div className="main_container">

//         <div className="main_left">

//           <input type="text" value={inpuData.imgUrl} placeholder="Input Image URL" onChange={(e) => {
//             e.preventDefault();
//             setInputData((preInputData) => ({
//               ...preInputData,
//               imgUrl: e.target.value
//             }));
//           }} />

//           <input type="text" value={inpuData.name} placeholder="Input Name" onChange={(e) => {
//             e.preventDefault();
//             setInputData((preInputData) => ({
//               ...preInputData,
//               name: e.target.value
//             }));
//           }} />

//           <input type="text" value={inpuData.city} placeholder="Input City" onChange={(e) => {
//             e.preventDefault();
//             setInputData((preInputData) => ({
//               ...preInputData,
//               city: e.target.value
//             }));
//           }} />

//           <input type="text" value={inpuData.position} placeholder="Input Position" onChange={(e) => {
//             e.preventDefault();
//             setInputData((preInputData) => ({
//               ...preInputData,
//               position: e.target.value
//             }));
//           }} />

//           <button onClick={() => {
//             console.log({
//               imgUrl: inpuData.imgUrl,
//               name: inpuData.name,
//               city: inpuData.city,
//               position: inpuData.position
//             });

//             //pass data to array
//             SetData((prev) => {
//               return [
//                 ...data,
//                 {
//                   imgUrl: inpuData.imgUrl,
//                   name: inpuData.name,
//                   city: inpuData.city,
//                   position: inpuData.position
//                 }
//               ]
//             });

//             // clear nput field
//             setInputData((pre) => { if (pre.imgUrl.length > 0) { return { ...pre, imgUrl: '' } } else { return pre } });
//             setInputData((pre) => { if (pre.name.length > 0) { return { ...pre, name: '' } } else { return pre } });
//             setInputData((pre) => { if (pre.city.length > 0) { return { ...pre, city: '' } } else { return pre } });
//             setInputData((pre) => { if (pre.position.length > 0) { return { ...pre, position: '' } } else { return pre } });

//           }}>
//             Submit</button>

//         </div>

//         <div className="main_right">

//           {data?.map(({ imgUrl, name, city, position }, index) => {
//             return <Unit key={index} imageUrl={imgUrl} name={name} city={city} position={position} />
//           })}

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;

// const App = () => {

//   const [dataObj, setDataObj] = useState({});

//   const [search, setSearch] = useState(0);

//   const [apiId, setApiId] = useState('1');
//   console.log(apiId);
//   console.log(dataObj);

//   useEffect(() => {

//     if (apiId.length > 0) {

//       console.log("use effect calling");

//       const apiCall = async () => {
//         const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${apiId}`);
//         const data = await res.json();

//         if (data) {
//           setDataObj(data);
//         }
//       }

//       apiCall();

//     }

//   }, [search]);

//   return (
//     <div>
//       <input type='text' placeholder='Enter ID' value={apiId} onChange={(e) => {
//         e.preventDefault();
//         setApiId(e.target.value);
//       }} />

//       <button onClick={() => {
//         setSearch((prev) => (prev === 0 ? 1 : 0));
//       }}>Search</button>

//       {dataObj && (<div>
//         <h3>{dataObj.id}</h3>
//         <p>{dataObj.title}</p>
//       </div>)}
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/contact/:id' Component={User} />
        <Route path='/contact/details' Component={ContactDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;