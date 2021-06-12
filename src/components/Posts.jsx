import {useEffect,useState} from "react"
import {Link} from "react-router-dom"
function Posts() {
    const [state, setstate] = useState([])
    useEffect(() => {
        data()
    },[])
    const data = async () => {
      await  fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => { return data.json() })
          .then((item) => {
              console.log(item)
              setstate(item)
          })
        
       
   }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Post!!</h1>
        </header>
          <div>
              {
                  state.map((item) => {

                      return <Link key={item.id} to={`/Posts/${item.id}`}>
                          <h1>{item.title}</h1></Link>
                       

                           
                
                  })
              }
           </div>
    </div>
  );
}

export default Posts;
