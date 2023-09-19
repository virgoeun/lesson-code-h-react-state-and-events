import Counter from "./components/Counter";
import { useState } from "react";
import WeatherWidget from "./components/WeatherWidget";

//console.log(useState(0))
// => deconstructuring with ARRAY: let(const => when the value stays the same) [count, setCount] = useState(0)
//console.log(useState(""))
// => useState(initial value, function to change the initial value)
//never useState outside the event (then react keeps randering without stopping)

function App() {
  let [count, setCount] = useState(0);
  const [username, setUsername] = useState("");
  // const [user, setUser] = useState(userObject)
  const [user, setUser] = useState({
    name: "Bob",
    age: 17,
    city: "Berlin",
  });

  const country = ["Germany", "Korea", "England"];
  const [countries, setCountries] = useState(country);

  function changeCountry() {
    setCountries((prevCountries) => {
      return ["Italy", ...prevCountries];
      // return [ ...prevCountries, "Italy"]; gonna push to the end (like array methods)

      // setCountries((prevCountries) => {
      //  const newCountries = prevCountries; // because it's immutable so you gotta create a new array(copy) like this
      //  newCountries.push("Italy")
      //  return newCountries;
      //  })
    });
  }

  // this will cause infinite loop :
  // setCount(count - 1);
  // console.log(count);

  const [theme, setTheme] = useState("light");

  const toggleTheme = event => {
    setTheme(event.target.value);
  };

  function incrementAge() {
    setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount(count - 1);
  }

  //increment -3 at one time (due to setCount's asynchronous)

  // this doesn't work
  // setCount(count - 1);
  // setCount(count - 1);
  // setCount(count - 1);

  //Instead
  // setCount((prevCount) => (prevCount-1))
  // setCount((prevCount) => (prevCount-1))
  // setCount((prevCount) => (prevCount-1))
  // }

  return (
    <div className={"App " + theme}>
      <select
        onChange={toggleTheme}
        //onChnage{event => setTheme(event.target.value)}
      >
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
      {count}
      <input
        onChange={(event) => {
          console.log(event)
          console.log(event.target.value)
          setUsername(event.target.value)}}
        type="text"
      />
      {/* {username} */}

      <button onClick={incrementAge}>Age</button>
      <button onClick={changeCountry}>update Country</button>
      {JSON.stringify(user)}
      {user.age}
      {JSON.stringify(countries)}
    </div>
  );
}

export default App;

// setCount(count+1)instead of JS's count++ (this is wrong - difference from JS)

// function App() {
//   const [theme, setTheme] = useState("light");
//   const [unit, setUnit] = useState("C");

//   const toggleTheme = (event) => {
//     setTheme(event.target.value);
//   };

//   return (
//     <div className={"App " + theme}>
//       <h1>React - state and events</h1>
//       <Counter />

//       <select onChange={toggleTheme}>
//         <option value="light"> Light </option>
//         <option value="dark"> Dark </option>
//       </select>

//       <button onClick={() => setUnit("C")}> °C </button>
//       <button onClick={() => setUnit("F")}> °F </button>

//       <div>
//         <WeatherWidget city="Miami" icon="🟡" celsius={29} unit={unit} />
//         <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
//         <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
//         <WeatherWidget city="Barcelona" icon="🌤️" celsius={28} unit={unit} />
//       </div>
//     </div>
//   );
// }
