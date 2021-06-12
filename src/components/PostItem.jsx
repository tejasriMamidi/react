import {useState,useEffect} from "react";
import { useHistory,useLocation,Route,Switch,Link} from "react-router-dom";
 import "../App.css"
function PostItem({ match }) {
  console.log(match.params.id)
  const item  = useHistory()
    const [state, setState] = useState({})
    
    useEffect(() => {
         fetchingItem()
    },[])
    const fetchingItem =  () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`).then((data) => {
            return data.json()
        }).then((item) => {

             setState(item)  
         })
    }
  return (
    <div className="App">
          <h1>PostItem</h1>
          <div className="goodPost">
          
        
              <h1>{state.title}</h1>
              <p>{state.body}</p>
        <button style={{ padding: "20px", color: "black", fontSize: "20px", border: "none" }} onClick={() => {
               console.log(item)             
          return item.push("/")
              }}>Back</button>
       
      </div>
     

    </div>
  );
}




export default PostItem;
