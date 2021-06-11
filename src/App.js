import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import Posts from "./components/posts";
import RBhome from "./components/RBhome";


function App() {

  return (
      <div className="container-fluid">
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={RBhome} />
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
