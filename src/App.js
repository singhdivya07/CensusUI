import Footer from './Components/Footer/Footer';
import Navigation from './Components/Header/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateMemberComponent from './Components/Member/CreateMemberComponent';
import ListMemberComponent from "./Components/Member/ListMemberComponent";
import UpdateMemberComponent from './Components/Member/UpdateMemberComponent';
import ViewMemberComponent from "./Components/Member/ViewMemberComponent";
import RegisterUserComponent from './Components/RegisterUser/RegisterUserComponent';
import LoginUserComponent from './Components/LoginUser/LoginUserComponent';
import ViewDemo from './Components/Member/ViewDemo';



function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Router>
        <div >

          <Switch>
            <Route path="/" exact component={LoginUserComponent}></Route>
            <Route path="/add-user" component={RegisterUserComponent}></Route>
            <Route path="/member" component={ListMemberComponent}></Route>
            <Route path="/add-member" component={CreateMemberComponent}></Route>
            <Route path="/update-member/:id" component={UpdateMemberComponent}></Route>
            <Route path="/view-member/:id" component={ViewMemberComponent}></Route>
          </Switch>
        </div>
        {/* <FooterComponent /> */}

      </Router>

    </div>

  );
}
export default App;
