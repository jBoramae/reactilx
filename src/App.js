import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
   const [loading, setLoading] = useState(true);
   const [coins, setCoins] = useState([]);

   useEffect(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
         .then((res) => res.json())
         .then((json) => {
            setCoins(json);
            setLoading(false);
         });
   }, []);

   const [dollar, setDollar] = useState("");
   const [inputDollar, setInputDollar] = useState("");
   const [swit, setSwit] = useState(false);

   const onChange = (event) => setDollar(event.target.value);
   const onSubmit = (event) => {
      event.preventDefault();

      if (dollar === "") {
         alert("숫자를 입력해주세요.");
         return;
      }

      setSwit(true);
      setInputDollar(dollar);
      setDollar("");
   };

   const [showing, setShowing] = useState(false);
   const onClick = () => {
      setShowing(!showing);
   };

   return (
      <div className={styles.main}>
         <h1>The Coins! ({coins.length})</h1>
         {loading ? <strong>Loading...</strong> : null}
         <form onSubmit={onSubmit}>
            <input
               placeholder="Insert..."
               type="number"
               value={dollar}
               onChange={onChange}
               id="inputId"
            />
            <label htmlFor="inputId"> Dollar is ... </label>
            <button>Exchange</button>
         </form>
         <br />

         {swit ? (
            <select>
               {coins.map((coin, index) => (
                  <option key={index}>
                     ${inputDollar} : {coin.name}{" "}
                     {inputDollar / coin.quotes.USD.price} ({coin.symbol})
                  </option>
               ))}
            </select>
         ) : null}

         <hr />
         <button onClick={onClick}>
            {!showing ? "Show all coins" : "Hide coins"}
         </button>
         <br />
         {showing === true ? (
            <ul>
               {coins.map((coin, index) => (
                  <li key={index}>
                     {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price} USD
                  </li>
               ))}
            </ul>
         ) : null}
      </div>
   );
}

// function ToDoList() {
//    const [item, setItem] = useState("");
//    const [items, setItems] = useState([]);
//    const onChange = (event) => setItem(event.target.value);
//    const onSubmit = (event) => {
//       event.preventDefault();

//       if (item === "") {
//          return;
//       }

//       /**
//        * numArray = [1, 2, 3, 4];
//        * [6, numArray] => (2) [6, Array(4)];
//        * [6, ...numArray] => (5) [6, 1, 2, 3, 4];
//        */
//       setItems((prevArray) => [item, ...prevArray]);
//       setItem("");
//    };

//    console.log(items);

//    // JSX에서 JS 사용시 중괄호 필수!
//    return (
//       <div>
//          <h2>✅ My To Do List ({items.length})</h2>
//          <form onSubmit={onSubmit}>
//             <input
//                onChange={onChange}
//                value={item}
//                type="text"
//                placeholder="Write your to do..."
//             />
//             <button>Add To do</button>
//          </form>
//          <hr />
//          <ul>
//             {items.map((elem, index) => (
//                <li key={index}>{elem}</li>
//             ))}
//          </ul>
//       </div>
//    );
// }

export default App;

/**
 * days = ["Mon", "Tue", "Wed", "Thus", "Fri"];
 * days.map((day, index) => `${day}, ${index}`)
 * (5) ['Mon, 0', 'Tue, 1', 'Wed, 2', 'Thus, 3', 'Fri, 4']
 */
