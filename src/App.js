import React from 'react';
import PhoneDirectory from './Container/PhoneDirectory';
import AddSubscriber from './Container/AddSubscriber';
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import 'tachyons';

const App = () =>
{

	return(
		<Router>
         <div className="App">
         	
         	<Route path="/" exact render={
         		() => {
         			return (<PhoneDirectory />)
         		}
         	}/>

         	<Route path="/add" exact render={
         		() => {
         			return (<AddSubscriber  />)
         		}
         	}/>
         
 
         </div>

         </Router>
       ) 
}

export default App;
