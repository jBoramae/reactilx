import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
   return (
      <Router>
         <Switch>
            <Route path="/movie">
               <Detail />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;

/**
 * 라우터: url을 보고있는 컴포넌트 => 해시라우터 & 브라우저라우터.
 *
 * <Switch> => Route(URL)을 찾음 => 찾으면 컴포넌트 렌더링
 *
 * http://localhost:3000/movie => 브라우저라우터
 * http://localhost:3000/#/movie => 해시라우터
 *
 * import { Link } from "react-router-dom";
 * => 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트.
 */
