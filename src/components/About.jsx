import {Link,Route, Switch,useRouteMatch} from "react-router-dom"
import Goods from "./Goods"
function About() {
      const match = useRouteMatch()
         console.log(match)
  return (
    <div className="App">
       
      <header className="App-header">

        <h1>About!!!</h1>
        <Link to={`${match.url}/goods`}>goods</Link>
        <br />
         <Link to={`${match.url}/books`}>books</Link>

      </header>
      <main>
         <Route path={`${match.path}/goods`} >
          <Goods/>
        </Route>
        <Route path={`${match.path}/books`} exact >
          <h1>Books</h1>
        </Route>
     </main>
      
    </div>
  );
}

export default About;
