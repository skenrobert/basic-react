import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting, CreateObj, PropsExample, Client } from "./example"; // export N component, that have many component
import Product, { Navbar } from "./product"; //export whole component, that have only one component (Navbar is change export for default)
import { Button } from "./Button";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function Greeting() {//all component need create with function syntax the first character in Uppercase
//     const name = "Kenny";
//     const married = false;

//     return <h1>{married ? "I'm married " + married.toString() : "I'm don't married " + married.toString()}</h1>;

//     if (married) {
//       return <h1>I'm married</h1>;
//     }

//     return <h1> Hello World, {name}</h1>;
//   }

//   function CreateObj() {//all component need create with function syntax the first character in Uppercase
//       const user = {
//           firstName: 'Kenny',
//           lastname: 'Mora'
//       }

//       // return <h1> {JSON.stringify(user)} </h1>

//       function age(birthYear){ // function in component
//           let today = new Date();
//           let year = today.getFullYear();
//           return year - birthYear
//       }

//       return(
//           <div>
//               <h1> {user.firstName} </h1>
//               <h1> {user.lastname} </h1>
//               <h1> { age(1900) } </h1>
//           </div>
//       );
//   }

//send components to index.html (div id=root)
root.render(
  <>
    {/* { Greeting() } */}
    {/* is the same this */}
    {/* <Greeting></Greeting> */}
    {/* and then */}

    {/* <Greeting />
    <CreateObj /> */}
    {/* <Product /> */}

    {/* <PropsExample title="hi" name="kenny" />
    <PropsExample title="Props" /> */}
    
    {/* below example props */}
    {/* <PropsExample y={30} />
    <PropsExample z={true} />
    <PropsExample arr={[1,2,3]} /> */}

    {/* <Client 
    name="Kenny Robert"
    amount={3000}
    married={true}
    points={[99, 33.3, 22.2]}
    address={{ street: "123 Main Street", city: "New York"}}
    greet={ function () { alert('Add functions to props') }}
    /> */}

    <Button title="Click me" />    
    <Button title="Save" />    
    <Button title={3000} />    

  </>
);
