import {Link,NavLink ,BrowserRouter as Router} from "react-router-dom"
function Nav() {

  return (
      <div className="App">
    
          <nav>
            <NavLink  to="/" className="item2">
             <h2>logo</h2>        
           </ NavLink>
              <ul>
                      <li>
                          <NavLink activeStyle={{color:"white",backgroundColor:"black",padding:"20px"}} to="/Posts" className="item2">
                              Posts
                          </NavLink>
                      </li>
                           <li>
                          <NavLink activeStyle={{color:"white",backgroundColor:"black",padding:"20px"}} to="/AddPosts" className="item2">
                             AddPosts
                          </NavLink>
                      </li>    
                      <li>
                          <NavLink activeStyle={{color:"white",backgroundColor:"black",padding:"20px"}}to="/About" className="item3">
                              About
                          </NavLink>

                          
                  </li>
                
                 
              </ul>
              </nav>
                              
    </div>
  );
}

export default Nav;
