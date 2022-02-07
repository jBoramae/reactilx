import { useState } from "react";

function App() {
   const [item, setItem] = useState("");
   const [items, setItems] = useState([]);
   const onChange = (event) => setItem(event.target.value);
   const onSubmit = (event) => {
      event.preventDefault();

      if (item === "") {
         return;
      }

      setItems((prevArray) => [item, ...prevArray]);
      setItem("");
   };

   console.log(items);

   // JSX에서 JS 사용시 중괄호 필수!

   return (
      <div>
         <h2>✅ My To Do List ({items.length})</h2>
         <form onSubmit={onSubmit}>
            <input
               onChange={onChange}
               value={item}
               type="text"
               placeholder="Write your to do..."
            />
            <button>Add To do</button>
         </form>
         <hr />
         <ul>
            {items.map((elem, index) => (
               <li key={index}>{elem}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;
