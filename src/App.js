import React from "react"
import { BrowserRouter as Router ,Switch,Route, Redirect, useLocation,useHistory } from "react-router-dom"
import About from './components/About';
import Nav from './components/Nav';
import AddPosts from "./Pages/AddPosts";
import Posts from './components/Posts';
import PostItem from "./components/PostItem"
import Layout  from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css"

const Home = () => {
 
  return (
    <div>
    <h1>Home</h1>
    </div>
  )
}
function App() {
  return (
    <>

      <Router>
        <ScrollToTop />
         
        <Layout>
          <Switch>
        <Route path="/"  component={Home} exact/>
            <Route path="/About" component={About} />
        <Route  path="/AddPosts"  component={AddPosts} />
              
          <Route path="/Posts" exact component={Posts} />
          <Route path="/Posts/:id"  component={PostItem}></Route>
          <Route path="*" component={ Error4}/>
        </Switch>
       </Layout>

     
        
      </Router>
     
    </>
  );
}

const Error4 = () => {
  const historyHome = useHistory()
  
  return (
    <div>
       <h1>Error</h1>
    <button onClick={() => {
           historyHome.push("/")
          }}>Back</button>
     </div>
   )
  


}
export default App;
