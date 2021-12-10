import "./App.css";
import Home from "./components/home";
import Nav from "./components/nav";
import Register from "./components/register";
import Login from "./components/login";
import Issue from "./components/issue";
import  Cart from "./components/cart";
import UpdateIssue from "./components/updateissue";
import PageNotFound from "./components/pagenotfound";
import "bootstrap/dist/css/bootstrap.css";
import {Route,Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/issue/update/:issueId" component={UpdateIssue} />
        <Route path="/cart" component={Cart} />
        <Route path="/issue" component={Issue}/>
        <Route component={PageNotFound}/>

  
      </Switch>
     
    </div>
  );
}

export default App;