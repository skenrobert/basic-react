export function Greeting() {
  //all component need create with function syntax the first character in Uppercase
  const name = "Kenny";
  const married = false;

  return (
    <h1>
      {married
        ? "I'm married " + married.toString()
        : "I'm don't married " + married.toString()}
    </h1>
  );

  if (married) {
    return <h1>I'm married</h1>;
  }

  return <h1> Hello World, {name}</h1>;
}

export function CreateObj() {
  //all component need create with function syntax the first character in Uppercase
  const user = {
    firstName: "Kenny",
    lastname: "Mora",
  };

  // return <h1> {JSON.stringify(user)} </h1>

  function age(birthYear) {
    // function in component
    let today = new Date();
    let year = today.getFullYear();
    return year - birthYear;
  }

  return (
    <div>
      <h1> {user.firstName} </h1>
      <h1> {user.lastname} </h1>
      <h1> {age(1900)} </h1>
    </div>
  );
}

export function PropsExample(props, name = null) {
  console.log(props);
  return (
    <h1>
      show for console {props.title} {props.name}{" "}
    </h1>
  );
}

//   export function Client(props){
export function Client({name, amount, married, points, address, greet }) {//this optimize form
  let client = {
    // name: props.name,
    // amount: props.amount,
    // married: props.married,
    // points: props.points,
    // address: props.address
    name: name,
    amount: amount,
    married: married,
    points: points,
    address: address
  };

  console.log(client);
  //is that function add in index.js 
  console.log(greet);

  return (
    <div>
      <h1>in the component Client {name}</h1>
      <p>$ {amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>City: {address.street}</li>
      </ul>
    </div>
  );
}
